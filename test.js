const container = document.querySelector(".not_a_particle");

function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";

  // Set random position and animation duration
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.top = Math.random() * 100 + "vh";
  particle.style.animationDuration = Math.random() * 2 + 1 + "s"; // 1 to 3 seconds
  particle.style.opacity = 1; // Show particle

  container.appendChild(particle);

  // Animation to fade out and move upwards
  particle.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: "translateY(-100px)", opacity: 0 },
    ],
    {
      duration: parseFloat(particle.style.animationDuration) * 1000,
      easing: "ease-out",
      fill: "forwards",
    }
  );

  // Remove particle after animation
  particle.addEventListener("animationend", () => {
    particle.remove();
  });
}

// Create particles at intervals
setInterval(createParticle, Math.random() * 1000); // Create a new particle every 300ms
