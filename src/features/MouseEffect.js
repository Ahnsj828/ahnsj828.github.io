import React, { useEffect } from "react";
import "p5/lib/p5.global";
import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";

const MouseEffect = () => {
  useEffect(() => {
    let p;
    new p5((sketch) => {
      p = sketch;

      const paws = [];
      let prevPawLeft = false;
      const mouse = { prev: { x: 0, y: 0 }, dist: 0 };

      p.setup = () => {
        p.createCanvas(500, 500);
      };

      p.draw = () => {
        p.clear();
        p.noStroke();

        paws.forEach((paw) => {
          paw.update();
          paw.display();
        });
      };

      function pawDraw() {
        if (
          p.mouseX >= 0 &&
          p.mouseY >= 0 &&
          p.mouseX <= p.width &&
          p.mouseY <= p.height
        ) {
          const dx = Math.abs(p.mouseX - p.pmouseX);
          const dy = Math.abs(p.mouseY - p.pmouseY);
          if (mouse.dist > 25) {
            prevPawLeft = !prevPawLeft;
            const angle = Math.atan2(
              p.mouseY - (mouse.prev.y || p.pmouseY),
              p.mouseX - (mouse.prev.x || p.pmouseX)
            );
            paws.push(
              new Paw(p.mouseX, p.mouseY, (angle * 180) / Math.PI, prevPawLeft)
            );
            mouse.dist = 0;
            mouse.prev = { x: p.mouseX, y: p.mouseY };
          } else {
            mouse.dist += dx + dy;
          }
        } else {
          mouse.prev = { x: 0, y: 0 };
        }
      }

      p.touchMoved = () => {
        pawDraw();
      };

      p.mouseMoved = () => {
        pawDraw();
      };

      class Paw {
        constructor(x, y, angle, left) {
          this.x = x;
          this.y = y;
          this.alpha = 255;
          this.size = 7;
          this.left = left;
          this.angle = angle + 90;
        }

        update() {
          this.alpha -= (paws.length - paws.indexOf(this)) * 0.1;

          if (this.alpha <= 0) {
            paws.splice(paws.indexOf(this), 1);
          }
        }

        display() {
          p.push();
          p.fill(250, 148, 149, this.alpha);
          const offset = this.left ? this.size : -this.size;
          p.translate(this.x - this.size / 2, this.y - this.size / 2);
          p.rotate(this.angle);
          p.translate(offset * 1.5, 0);
          paw(this.size);
          p.angleMode(p.DEGREES);
          p.pop();
        }
      }

      const paw = (size) => {
        const center = size / 2;
        p.ellipse(size / 2, center, size * 0.9, size * 0.7);
        p.ellipse(0, 0, size * 0.5, size * 0.5);
        p.ellipse(center, -size * 0.2, size * 0.5, size * 0.5);
        p.ellipse(size, 0, size * 0.5, size * 0.5);
      };
    });
  }, []);

  return <div id="cursor-card"></div>;
};

export default MouseEffect;
