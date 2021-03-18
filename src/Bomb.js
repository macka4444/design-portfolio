import React from "react";
import Sketch from "react-p5";

const Bomb = (props) => {
  const setup = (p, canvasParentRef) => {
    p.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p) => {
    if (p.mouseIsPressed) {
      p.background(194, 0, 13);
      p.resetMatrix();
      p.translate(200, 200);
      p.angleMode(p.DEGREES);
      p.noStroke();

      const point_heights = [10, 12, 9, 12.5, 8.5, 10, 7, 11, 8, 12.5, 7.5];

      let scale = 35;
      p.fill(p.color(245, 83, 20)); //red
      for (let i = 0; i < 11; i++) {
        p.translate(scale * 5);
        p.rotate(360 / 11);
        p.triangle(-2 * scale, 0, 2 * scale, 0, 0, scale * point_heights[i]);
        p.translate(-scale * 5);
      }

      scale = 22;
      p.fill(p.color(252, 142, 38)); // orange
      for (let i = 0; i < 11; i++) {
        p.translate(scale * 5);
        p.rotate(360 / 11);
        p.triangle(-2 * scale, 0, 2 * scale, 0, 0, scale * point_heights[i]);
        p.translate(-scale * 5);
      }

      scale = 14;
      p.fill(p.color(245, 223, 20));
      for (let i = 0; i < 11; i++) {
        p.translate(scale * 5);
        p.rotate(360 / 11);
        p.triangle(-2 * scale, 0, 2 * scale, 0, 0, scale * point_heights[i]);
        p.translate(-scale * 5);
      }

      scale = 8;
      p.fill(p.color(255));
      for (let i = 0; i < 11; i++) {
        p.translate(scale * 5);
        p.rotate(360 / 11);
        p.triangle(-2 * scale, 0, 2 * scale, 0, 0, scale * point_heights[i]);
        p.translate(-scale * 5);
      }
    } else {
      p.background(219, 235, 218);
      p.resetMatrix();
      p.translate(0, 15);
      //main part of bomb
      p.noStroke();
      let from = p.color(155, 167, 189);
      let to = p.color(88, 98, 115);
      for (let i = 100; i >= 1; i--) {
        p.fill(p.lerpColor(from, to, i / 100));
        p.ellipse(200, 200, 1.5 * i, 1.5 * i);
      }

      p.translate(p.width / 2, p.height / 2);
      p.rotate(22.5);
      p.angleMode(p.DEGREES);

      //fuse
      p.fill(p.color(181, 135, 92));
      for (let i = 0; i < 35; i++) {
        p.ellipse(4 - 3 * p.sin((i * 360) / 40), -85 - i, 10, 5);
      }

      // cylinder
      for (let i = 0; i < 30; i++) {
        p.fill(p.lerpColor(to, from, i / 30));
        p.rect(-12.5 + i, -85, 2, 15);
      }

      //spark
      p.rotate(-22.5);
      p.translate(52, -110);
      p.rotate(25);
      p.fill(p.color(245, 223, 20)); //yellow
      for (let i = 0; i < 5; i++) {
        p.rotate(-60);
        p.rect(0, 15, 5, 15);
      }

      p.rotate(-45);
      p.fill(p.color(252, 142, 38)); // orange
      for (let i = 0; i < 5; i++) {
        p.rotate(-60);
        p.rect(0, 8, 5, 15);
      }

      p.rotate(-90);
      p.fill(p.color(245, 83, 20)); //red
      for (let i = 0; i < 5; i++) {
        p.rotate(-60);
        p.rect(0, 12, 5, 15);
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Bomb;
