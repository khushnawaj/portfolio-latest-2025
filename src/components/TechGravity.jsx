import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { useSelector } from 'react-redux';

export default function TechGravity() {
  const sceneRef = useRef(null);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    if (!sceneRef.current) return;

    // module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Composite = Matter.Composite,
      Bodies = Matter.Bodies;

    // create engine
    const engine = Engine.create();
    const world = engine.world;

    // create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: 400,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio,
      }
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    const width = sceneRef.current.clientWidth;
    const height = 400;

    // Walls (invisible)
    const wallOptions = { isStatic: true, render: { visible: false } };
    Composite.add(world, [
      Bodies.rectangle(width / 2, -50, width, 100, wallOptions), // top
      Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions), // bottom
      Bodies.rectangle(-50, height / 2, 100, height, wallOptions), // left
      Bodies.rectangle(width + 50, height / 2, 100, height, wallOptions) // right
    ]);

    // Tech Icons Text (circles basically, but using textured circles or just text sprites)
    const techs = ["React", "Node.js", "MongoDB", "Three.js", "GSAP", "AWS", "Docker", "Python", "TypeScript", "Next.js", "Redis", "Framer", "SQL"];
    
    // Create random circular bodies with text overlay
    const stack = [];
    const colors = theme === "dark" ? ["#0891b2", "#3b82f6", "#1e40af", "#0e7490", "#22d3ee"] : ["#06b6d4", "#3b82f6", "#2563eb", "#0284c7"];
    
    for (let i = 0; i < techs.length; i++) {
      const radius = 50 + Math.random() * 20;
      const x = Math.random() * width;
      const y = Math.random() * -500 - 50; // spawn above screen
      
      const body = Bodies.circle(x, y, radius, {
        restitution: 0.9, // bouncy
        friction: 0.005,
        render: {
          fillStyle: colors[i % colors.length],
          strokeStyle: '#ffffff',
          lineWidth: 2,
        },
        plugin: {
          label: techs[i]
        }
      });
      stack.push(body);
    }

    Composite.add(world, stack);

    // Add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // Custom render for text inside circles
    Matter.Events.on(render, 'afterRender', function() {
      const context = render.context;
      
      stack.forEach(body => {
        const { x, y } = body.position;

        // Anti-escape measure: Keep bodies inside screen bounds if they glitch through
        const currentWidth = sceneRef.current.clientWidth;
        if (x < -100 || x > currentWidth + 100 || y > height + 200) {
            Matter.Body.setPosition(body, { x: currentWidth / 2 + (Math.random() * 10), y: -100 });
            Matter.Body.setVelocity(body, { x: 0, y: 0 });
        }

        context.font = `bold ${body.circleRadius * 0.4}px Inter, sans-serif`;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = "#ffffff";
        
        // Save context, rotate, draw text, restore
        context.save();
        context.translate(x, y);
        context.rotate(body.angle);
        context.fillText(body.plugin.label, 0, 0);
        context.restore();
      });
    });

    // Fit on resize
    const handleResize = () => {
      if(!sceneRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      render.canvas.width = newWidth;
      
      // Move right wall correctly
      Matter.Body.setPosition(world.bodies[3], { x: newWidth + 50, y: height / 2 });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [theme]);

  return (
    <div className="w-full relative bg-gray-50 dark:bg-[#09090b] py-20 overflow-hidden border-y border-gray-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12 reveal-up">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Sandbox</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Built with a robust ecosystem of modern tools. Reach out, grab them, and throw them around!
        </p>
      </div>
      <div 
        ref={sceneRef} 
        className="w-full max-w-6xl mx-auto h-[400px] bg-white dark:bg-[#111216] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 cursor-grab active:cursor-grabbing overflow-hidden relative z-10" 
      />
    </div>
  );
}
