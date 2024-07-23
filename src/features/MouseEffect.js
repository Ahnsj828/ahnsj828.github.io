// import React, { useEffect } from "react";
import { useEffect } from "react";
import p5 from "p5";

const MouseEffect = () => {
  useEffect(() => {
    let canvas;
    let paws = [];
    let prevPawLeft = false;
    const mouse = { prev: { x: 0, y: 0 }, dist: 0 };

    const sketch = (p) => {
      p.setup = () => {
        canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.position(0, 0); // 위치 설정
        canvas.style("pointer-events", "none");
        canvas.style("z-index", "9999"); // 가장 위에 오도록 설정
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
          if (mouse.dist > 40) {
            // 다음 발자국 거리 / 발자국 간격
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
          this.alpha = 255; // 초기 투명도
          this.size = 15; // 발바닥 사이즈 변경
          this.left = left;
          this.angle = angle + 90;
        }

        update() {
          this.alpha -= (paws.length - paws.indexOf(this)) * 0.9; // 발바닥 남는시간 0.1 대신 0.5로 변경

          if (this.alpha <= 0) {
            paws.splice(paws.indexOf(this), 1);
          }
        }

        display() {
          p.push();
          // p.fill(250, 148, 149, this.alpha); // 분홍 발바닥
          p.fill(158, 113, 87, this.alpha); // 갈색 발바닥
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

      return () => {
        // Clean up p5 sketch
        paws = [];
        if (canvas) {
          canvas.remove();
        }
      };
    };

    new p5(sketch);

    return () => {
      // Clean up p5 sketch
      paws = [];
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return null; // MouseEffect는 화면에 아무것도 렌더링하지 않음
};

export default MouseEffect;
