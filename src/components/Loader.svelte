<div class="cover">
  <div class="scene">
    <div class="cube-wrapper">
      <div class="cube">
        <div class="cube-faces">
          <div class="cube-face shadow" />
          <div class="cube-face bottom" />
          <div class="cube-face top" />
          <div class="cube-face left" />
          <div class="cube-face right" />
          <div class="cube-face back" />
          <div class="cube-face front" />
        </div>
      </div>
    </div>
  </div>
</div>
<img
  src="https://portfolio-cw.s3.amazonaws.com/profile.jpg"
  alt="carlos wosiak @ Machu Picchu"
  style="display: none"
/>

<style>
  .cover {
    top: 0;
    left: 0;
    overflow: hidden;
    background: linear-gradient(45deg, #081218, #050f41, #0b1245);
    background-size: 200% 200%;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    position: absolute;
    z-index: 101;
  }

  .scene {
    position: relative;
    z-index: 2;
    height: 220px;
    width: 220px;
    display: grid;
    place-items: center;
  }
  .cube-wrapper {
    transform-style: preserve-3d;
    animation: bouncing 2s infinite;
  }
  .cube {
    transform-style: preserve-3d;
    transform: rotateX(45deg) rotateZ(45deg);
    animation: rotation 2s infinite;
  }
  .cube-faces {
    transform-style: preserve-3d;
    height: 80px;
    width: 80px;
    position: relative;
    transform-origin: 0 0;
    transform: translateX(0) translateY(0) translateZ(-40px);
  }
  .cube-face {
    position: absolute;
    inset: 0;
    background: #110d31;
    border: solid 1px rgb(var(--accent));
  }
  .cube-face.shadow {
    transform: translateZ(-80px);
    animation: bouncing-shadow 2s infinite;
  }
  .cube-face.top {
    transform: translateZ(80px);
  }
  .cube-face.front {
    transform-origin: 0 50%;
    transform: rotateY(-90deg);
  }
  .cube-face.back {
    transform-origin: 0 50%;
    transform: rotateY(-90deg) translateZ(-80px);
  }
  .cube-face.right {
    transform-origin: 50% 0;
    transform: rotateX(-90deg) translateY(-80px);
  }
  .cube-face.left {
    transform-origin: 50% 0;
    transform: rotateX(-90deg) translateY(-80px) translateZ(80px);
  }
  @keyframes rotation {
    0% {
      transform: rotateX(45deg) rotateY(0) rotateZ(45deg);
      animation-timing-function: cubic-bezier(0.17, 0.84, 0.44, 1);
    }
    50% {
      transform: rotateX(45deg) rotateY(0) rotateZ(225deg);
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
    }
    100% {
      transform: rotateX(45deg) rotateY(0) rotateZ(405deg);
      animation-timing-function: cubic-bezier(0.17, 0.84, 0.44, 1);
    }
  }
  @keyframes bouncing {
    0% {
      transform: translateY(-40px);
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
    }
    45% {
      transform: translateY(40px);
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    }
    100% {
      transform: translateY(-40px);
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
    }
  }
  @keyframes bouncing-shadow {
    0% {
      transform: translateZ(-80px) scale(1.3);
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
      opacity: 0.05;
    }
    45% {
      transform: translateZ(0);
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
      opacity: 0.3;
    }
    100% {
      transform: translateZ(-80px) scale(1.3);
      animation-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
      opacity: 0.05;
    }
  }
</style>
