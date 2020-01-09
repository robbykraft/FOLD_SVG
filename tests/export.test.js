const fs = require("fs");
const FOLDtoSVG = require("../fold-to-svg");

const outputDir = "./tests/output";
fs.existsSync(outputDir) || fs.mkdirSync(outputDir);

test("convert and export files", () => {
  fs.readFile("./tests/examples/single-vertex.fold", (err, data) => {
    const singleVertex = JSON.parse(data);
    const frame0 = FOLDtoSVG(singleVertex);
    const frame1 = FOLDtoSVG(singleVertex, { frame: 1, shadows: true, padding: 0.1 });
    [frame0, frame1].forEach((frame, i) => {
      fs.writeFile(`./tests/output/single-vertex-${i}.svg`, frame, (err2) => {
        if (err2) { throw err2; }
        // console.log(`FOLD -> SVG result at output/test-frame-${i}.svg`);
        expect(err2).toBe(null);
      });
    });
  });

  fs.readFile("./tests/examples/crane.fold", (err, data) => {
    const crane1 = FOLDtoSVG(JSON.parse(data));
    fs.writeFile("./tests/output/cp-crane.svg", crane1, (err2) => {
      if (err2) { throw err2; }
      // console.log("FOLD -> SVG result at output/test-crane1.svg");
      expect(err2).toBe(null);
    });
    fs.readFile("./tests/examples/byrne.css", "utf8", (err3, cssData) => {
      const options = {
        stylesheet: cssData,
        padding: 0.02,
      };
      const crane2 = FOLDtoSVG(JSON.parse(data), options);
      fs.writeFile("./tests/output/cp-crane-style.svg", crane2, (err4) => {
        if (err4) { throw err4; }
        // console.log("FOLD -> SVG result at output/test-crane2.svg");
        expect(err4).toBe(null);
      });
    });
  });

  fs.readFile("./tests/examples/diagram.fold", (err, data) => {
    const diagram = JSON.parse(data);
    const svg = FOLDtoSVG(diagram, { frame: 1, shadows: true, padding: 0.1 });
    fs.writeFile("./tests/output/diagram-step.svg", svg, (err2) => {
      if (err2) { throw err2; }
      // console.log("FOLD -> SVG result at output/test-diagram.svg");
      expect(err2).toBe(null);
    });
  });
});
