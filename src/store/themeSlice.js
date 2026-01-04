import { createSlice } from "@reduxjs/toolkit";

const initialTheme =
  localStorage.getItem("theme") || "dark";

if (initialTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: initialTheme },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";

      localStorage.setItem("theme", state.mode);

      if (state.mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
