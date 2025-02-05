// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function clone(val: any) {
  return JSON.parse(JSON.stringify(val));
}

// STICKY IMPORT

figma.notify("Updating to new FigJam Colors", { timeout: Infinity });

const STICKY_GRAY_OLD = JSON.stringify(
  figma.util.rgb({
    r: 0.686274528503418,
    g: 0.7372549176216125,
    b: 0.8117647171020508,
  })
);
const STICKY_RED_OLD = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.686274528503418,
    b: 0.6392157077789307,
  })
);
const STICKY_ORANGE_OLD = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.7686274647712708,
    b: 0.43921568989753723,
  })
);
const STICKY_YELLOW_OLD = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.8509804010391235,
    b: 0.4000000059604645,
  })
);
const STICKY_GREEN_OLD = JSON.stringify(
  figma.util.rgb({
    r: 0.5215686559677124,
    g: 0.8784313797950745,
    b: 0.6392157077789307,
  })
);
const STICKY_BLUE_OLD = JSON.stringify(
  figma.util.rgb({
    r: 0.501960813999176,
    g: 0.7921568751335144,
    b: 1,
  })
);
const STICKY_VIOLET_OLD = JSON.stringify(
  figma.util.rgb({
    r: 0.8509804010391235,
    g: 0.7215686440467834,
    b: 1,
  })
);
const STICKY_PINK_OLD = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.7411764860153198,
    b: 0.9490196108818054,
  })
);
const STICKY_WHITE_OLD = JSON.stringify(
  figma.util.rgb({
    r: 0.9019607901573181,
    g: 0.9019607901573181,
    b: 0.9019607901573181,
  })
);

const STICKY_OLD_COLORS = [
  STICKY_GRAY_OLD,
  STICKY_RED_OLD,
  STICKY_ORANGE_OLD,
  STICKY_YELLOW_OLD,
  STICKY_GREEN_OLD,
  STICKY_BLUE_OLD,
  STICKY_VIOLET_OLD,
  STICKY_PINK_OLD,
  STICKY_WHITE_OLD,
];

const STICKY_NEW_COLORS: { [key: string]: RGB } = {};
// written like this to avoid weird typescript error
STICKY_NEW_COLORS[STICKY_WHITE_OLD] = figma.util.rgb("#FFFFFF");
STICKY_NEW_COLORS[STICKY_GRAY_OLD] = figma.util.rgb("#E6E6E6");
STICKY_NEW_COLORS[STICKY_GREEN_OLD] = figma.util.rgb("#B3EFBD");
STICKY_NEW_COLORS[STICKY_BLUE_OLD] = figma.util.rgb("#A8DAFF");
STICKY_NEW_COLORS[STICKY_VIOLET_OLD] = figma.util.rgb("#D3BDFF");
STICKY_NEW_COLORS[STICKY_PINK_OLD] = figma.util.rgb("#FFA8DB");
STICKY_NEW_COLORS[STICKY_RED_OLD] = figma.util.rgb("#FFB8A8");
STICKY_NEW_COLORS[STICKY_ORANGE_OLD] = figma.util.rgb("#FFD3A8");
STICKY_NEW_COLORS[STICKY_YELLOW_OLD] = figma.util.rgb("#FFE299");

const sticky_colors = {
  old: STICKY_OLD_COLORS,
  new: STICKY_NEW_COLORS,
};

// END STICKY IMPORT

// SHAPE IMPORT

const SHAPE_WHITE = JSON.stringify(figma.util.rgb("#FFFFFF"));
const SHAPE_DARK_BLACK = JSON.stringify(figma.util.rgb("#1E1E1E"));
const SHAPE_DARK_GRAY = JSON.stringify(figma.util.rgb("#757575"));
const SHAPE_DARK_RED = JSON.stringify(
  figma.util.rgb({
    r: 0.9490196108818054,
    g: 0.2823529541492462,
    b: 0.13333334028720856,
  })
);
const SHAPE_DARK_ORANGE = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.6509804129600525,
    b: 0.16078431904315948,
  })
);
const SHAPE_DARK_YELLOW = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.8039215803146362,
    b: 0.16078431904315948,
  })
);
const SHAPE_DARK_GREEN = JSON.stringify(
  figma.util.rgb({
    r: 0.0784313753247261,
    g: 0.6823529601097107,
    b: 0.3607843220233917,
  })
);
const SHAPE_DARK_BLUE = JSON.stringify(
  figma.util.rgb({
    r: 0.05098039284348488,
    g: 0.6000000238418579,
    b: 1,
  })
);
const SHAPE_DARK_VIOLET = JSON.stringify(
  figma.util.rgb({
    r: 0.5921568870544434,
    g: 0.27843138575553894,
    b: 1,
  })
);
const SHAPE_LIGHT_BLACK = JSON.stringify(figma.util.rgb("#B3B3B3"));
const SHAPE_LIGHT_GRAY = JSON.stringify(figma.util.rgb("#E6E6E6"));
const SHAPE_LIGHT_RED = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.7803921699523926,
    b: 0.7607843279838562,
  })
);
const SHAPE_LIGHT_ORANGE = JSON.stringify(
  figma.util.rgb({
    r: 0.9882352948188782,
    g: 0.8196078538894653,
    b: 0.6117647290229797,
  })
);
const SHAPE_LIGHT_YELLOW = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.9098039269447327,
    b: 0.6392157077789307,
  })
);
const SHAPE_LIGHT_GREEN = JSON.stringify(
  figma.util.rgb({
    r: 0.686274528503418,
    g: 0.95686274766922,
    b: 0.7764706015586853,
  })
);
const SHAPE_LIGHT_BLUE = JSON.stringify(
  figma.util.rgb({
    r: 0.7411764860153198,
    g: 0.8901960849761963,
    b: 1,
  })
);
const SHAPE_LIGHT_VIOLET = JSON.stringify(
  figma.util.rgb({
    r: 0.8941176533699036,
    g: 0.800000011920929,
    b: 1,
  })
);

const SHAPE_OLD_COLORS = [
  SHAPE_WHITE,
  SHAPE_DARK_BLACK,
  SHAPE_DARK_GRAY,
  SHAPE_DARK_RED,
  SHAPE_DARK_ORANGE,
  SHAPE_DARK_YELLOW,
  SHAPE_DARK_GREEN,
  SHAPE_DARK_BLUE,
  SHAPE_DARK_VIOLET,
  SHAPE_LIGHT_BLACK,
  SHAPE_LIGHT_GRAY,
  SHAPE_LIGHT_RED,
  SHAPE_LIGHT_ORANGE,
  SHAPE_LIGHT_YELLOW,
  SHAPE_LIGHT_GREEN,
  SHAPE_LIGHT_BLUE,
  SHAPE_LIGHT_VIOLET,
];

const SHAPE_NEW_COLORS: { [key: string]: RGB } = {};
// written like this to avoid weird typescript error
SHAPE_NEW_COLORS[SHAPE_WHITE] = figma.util.rgb("#FFFFFF");
SHAPE_NEW_COLORS[SHAPE_DARK_BLACK] = figma.util.rgb("#1E1E1E");
SHAPE_NEW_COLORS[SHAPE_DARK_GRAY] = figma.util.rgb("#757575");
SHAPE_NEW_COLORS[SHAPE_DARK_RED] = figma.util.rgb("#FF7556");
SHAPE_NEW_COLORS[SHAPE_DARK_ORANGE] = figma.util.rgb("#FF9E42");
SHAPE_NEW_COLORS[SHAPE_DARK_YELLOW] = figma.util.rgb("#FFC943");
SHAPE_NEW_COLORS[SHAPE_DARK_GREEN] = figma.util.rgb("#66D575");
SHAPE_NEW_COLORS[SHAPE_DARK_BLUE] = figma.util.rgb("#3DADFF");
SHAPE_NEW_COLORS[SHAPE_DARK_VIOLET] = figma.util.rgb("#874FFF");
SHAPE_NEW_COLORS[SHAPE_LIGHT_BLACK] = figma.util.rgb("#B3B3B3");
SHAPE_NEW_COLORS[SHAPE_LIGHT_GRAY] = figma.util.rgb("#E6E6E6");
SHAPE_NEW_COLORS[SHAPE_LIGHT_RED] = figma.util.rgb("#FFCDC2");
SHAPE_NEW_COLORS[SHAPE_LIGHT_ORANGE] = figma.util.rgb("#FFE0C2");
SHAPE_NEW_COLORS[SHAPE_LIGHT_YELLOW] = figma.util.rgb("#FFECBD");
SHAPE_NEW_COLORS[SHAPE_LIGHT_GREEN] = figma.util.rgb("#CDF4D3");
SHAPE_NEW_COLORS[SHAPE_LIGHT_BLUE] = figma.util.rgb("#C2E5FF");
SHAPE_NEW_COLORS[SHAPE_LIGHT_VIOLET] = figma.util.rgb("#DCCCFF");

const shape_colors = {
  old: SHAPE_OLD_COLORS,
  new: SHAPE_NEW_COLORS,
};

// END SHAPE IMPORT

// START SECTION

const SECTION_WHITE = JSON.stringify(figma.util.rgb("#FFFFFF"));
const SECTION_DARK_BLACK = JSON.stringify(figma.util.rgb("#1E1E1E"));
const SECTION_DARK_GRAY = JSON.stringify(figma.util.rgb("#757575"));
const SECTION_DARK_RED = JSON.stringify(
  figma.util.rgb({
    r: 0.9923529624938965,
    g: 0.8923529386520386,
    b: 0.8700000047683716,
  })
);
const SECTION_DARK_ORANGE = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.9476470947265625,
    b: 0.8741176724433899,
  })
);
const SECTION_DARK_YELLOW = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.970588207244873,
    b: 0.8741176724433899,
  })
);
const SECTION_DARK_GREEN = JSON.stringify(
  figma.util.rgb({
    r: 0.8617647290229797,
    g: 0.9523529410362244,
    b: 0.9041177034378052,
  })
);
const SECTION_DARK_BLUE = JSON.stringify(
  figma.util.rgb({
    r: 0.8588235378265381,
    g: 0.9411764740943909,
    b: 1,
  })
);
const SECTION_DARK_VIOLET = JSON.stringify(
  figma.util.rgb({
    r: 0.9388235807418823,
    g: 0.8917646408081055,
    b: 1,
  })
);
const SECTION_LIGHT_BLACK = JSON.stringify(figma.util.rgb("#B3B3B3"));
const SECTION_LIGHT_GRAY = JSON.stringify(figma.util.rgb("#E6E6E6"));
const SECTION_LIGHT_RED = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.9670588374137878,
    b: 0.9641176462173462,
  })
);
const SECTION_LIGHT_ORANGE = JSON.stringify(
  figma.util.rgb({
    r: 0.998235285282135,
    g: 0.9729411602020264,
    b: 0.9417647123336792,
  })
);
const SECTION_LIGHT_YELLOW = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.9864705801010132,
    b: 0.9458823204040527,
  })
);
const SECTION_LIGHT_GREEN = JSON.stringify(
  figma.util.rgb({
    r: 0.9529411792755127,
    g: 0.9935294389724731,
    b: 0.9664705991744995,
  })
);
const SECTION_LIGHT_BLUE = JSON.stringify(
  figma.util.rgb({
    r: 0.9611765146255493,
    g: 0.9835294485092163,
    b: 1,
  })
);
const SECTION_LIGHT_VIOLET = JSON.stringify(
  figma.util.rgb({
    r: 0.9841176271438599,
    g: 0.9700000286102295,
    b: 1,
  })
);

const SECTION_OLD_COLORS = [
  SECTION_WHITE,
  SECTION_DARK_BLACK,
  SECTION_DARK_GRAY,
  SECTION_DARK_RED,
  SECTION_DARK_ORANGE,
  SECTION_DARK_YELLOW,
  SECTION_DARK_GREEN,
  SECTION_DARK_BLUE,
  SECTION_DARK_VIOLET,
  SECTION_LIGHT_BLACK,
  SECTION_LIGHT_GRAY,
  SECTION_LIGHT_RED,
  SECTION_LIGHT_ORANGE,
  SECTION_LIGHT_YELLOW,
  SECTION_LIGHT_GREEN,
  SECTION_LIGHT_BLUE,
  SECTION_LIGHT_VIOLET,
];

const SECTION_NEW_COLORS: { [key: string]: RGB } = {};
// written like this to avoid weird typescript error
SECTION_NEW_COLORS[SECTION_WHITE] = figma.util.rgb("#FFFFFF");
SECTION_NEW_COLORS[SECTION_DARK_BLACK] = figma.util.rgb("#DDDDDD");
SECTION_NEW_COLORS[SECTION_DARK_GRAY] = figma.util.rgb("#EAEAEA");
SECTION_NEW_COLORS[SECTION_DARK_RED] = figma.util.rgb("#FFDED6");
SECTION_NEW_COLORS[SECTION_DARK_ORANGE] = figma.util.rgb("#FFEAD6");
SECTION_NEW_COLORS[SECTION_DARK_YELLOW] = figma.util.rgb("#FFF3D6");
SECTION_NEW_COLORS[SECTION_DARK_GREEN] = figma.util.rgb("#DDF8E2");
SECTION_NEW_COLORS[SECTION_DARK_BLUE] = figma.util.rgb("#DBF0FF");
SECTION_NEW_COLORS[SECTION_DARK_VIOLET] = figma.util.rgb("#EAE1FF");
SECTION_NEW_COLORS[SECTION_LIGHT_BLACK] = figma.util.rgb("#EAEAEA");
SECTION_NEW_COLORS[SECTION_LIGHT_GRAY] = figma.util.rgb("#F4F4F4");
SECTION_NEW_COLORS[SECTION_LIGHT_RED] = figma.util.rgb("#FFF1EE");
SECTION_NEW_COLORS[SECTION_LIGHT_ORANGE] = figma.util.rgb("#FFF7F0");
SECTION_NEW_COLORS[SECTION_LIGHT_YELLOW] = figma.util.rgb("#FFFBF0");
SECTION_NEW_COLORS[SECTION_LIGHT_GREEN] = figma.util.rgb("#EBFFEE");
SECTION_NEW_COLORS[SECTION_LIGHT_BLUE] = figma.util.rgb("#F5FBFF");
SECTION_NEW_COLORS[SECTION_LIGHT_VIOLET] = figma.util.rgb("#F8F5FF");

const section_colors = {
  old: SECTION_OLD_COLORS,
  new: SECTION_NEW_COLORS,
};

// END SECTION IMPORT

// START CONNECTOR IMPORT

const CONNECTOR_WHITE = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 1,
    b: 1,
  })
);
const CONNECTOR_DARK_BLACK = JSON.stringify(
  figma.util.rgb({
    r: 0.11764705926179886,
    g: 0.11764705926179886,
    b: 0.11764705926179886,
  })
);
const CONNECTOR_DARK_GRAY = JSON.stringify(
  figma.util.rgb({
    r: 0.4588235318660736,
    g: 0.4588235318660736,
    b: 0.4588235318660736,
  })
);
const CONNECTOR_DARK_RED = JSON.stringify(
  figma.util.rgb({
    r: 0.9490196108818054,
    g: 0.2823529541492462,
    b: 0.13333334028720856,
  })
);
const CONNECTOR_DARK_ORANGE = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.6509804129600525,
    b: 0.16078431904315948,
  })
);
const CONNECTOR_DARK_YELLOW = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.8039215803146362,
    b: 0.16078431904315948,
  })
);
const CONNECTOR_DARK_GREEN = JSON.stringify(
  figma.util.rgb({
    r: 0.0784313753247261,
    g: 0.6823529601097107,
    b: 0.3607843220233917,
  })
);
const CONNECTOR_DARK_BLUE = JSON.stringify(
  figma.util.rgb({
    r: 0.05098039284348488,
    g: 0.6000000238418579,
    b: 1,
  })
);
const CONNECTOR_DARK_VIOLET = JSON.stringify(
  figma.util.rgb({
    r: 0.5921568870544434,
    g: 0.27843138575553894,
    b: 1,
  })
);
const CONNECTOR_LIGHT_BLACK = JSON.stringify(
  figma.util.rgb({
    r: 0.7019608020782471,
    g: 0.7019608020782471,
    b: 0.7019608020782471,
  })
);
const CONNECTOR_LIGHT_GRAY = JSON.stringify(
  figma.util.rgb({
    r: 0.9019607901573181,
    g: 0.9019607901573181,
    b: 0.9019607901573181,
  })
);
const CONNECTOR_LIGHT_RED = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.7803921699523926,
    b: 0.7607843279838562,
  })
);
const CONNECTOR_LIGHT_ORANGE = JSON.stringify(
  figma.util.rgb({
    r: 0.9882352948188782,
    g: 0.8196078538894653,
    b: 0.6117647290229797,
  })
);
const CONNECTOR_LIGHT_YELLOW = JSON.stringify(
  figma.util.rgb({
    r: 1,
    g: 0.9098039269447327,
    b: 0.6392157077789307,
  })
);
const CONNECTOR_LIGHT_GREEN = JSON.stringify(
  figma.util.rgb({
    r: 0.686274528503418,
    g: 0.95686274766922,
    b: 0.7764706015586853,
  })
);
const CONNECTOR_LIGHT_BLUE = JSON.stringify(
  figma.util.rgb({
    r: 0.7411764860153198,
    g: 0.8901960849761963,
    b: 1,
  })
);
const CONNECTOR_LIGHT_VIOLET = JSON.stringify(
  figma.util.rgb({
    r: 0.8941176533699036,
    g: 0.800000011920929,
    b: 1,
  })
);

const CONNECTOR_OLD_COLORS = [
  CONNECTOR_WHITE,
  CONNECTOR_DARK_BLACK,
  CONNECTOR_DARK_GRAY,
  CONNECTOR_DARK_RED,
  CONNECTOR_DARK_ORANGE,
  CONNECTOR_DARK_YELLOW,
  CONNECTOR_DARK_GREEN,
  CONNECTOR_DARK_BLUE,
  CONNECTOR_DARK_VIOLET,
  CONNECTOR_LIGHT_BLACK,
  CONNECTOR_LIGHT_GRAY,
  CONNECTOR_LIGHT_RED,
  CONNECTOR_LIGHT_ORANGE,
  CONNECTOR_LIGHT_YELLOW,
  CONNECTOR_LIGHT_GREEN,
  CONNECTOR_LIGHT_BLUE,
  CONNECTOR_LIGHT_VIOLET,
];

const CONNECTOR_NEW_COLORS: { [key: string]: RGB } = {};
// written like this to avoid weird typescript error
CONNECTOR_NEW_COLORS[CONNECTOR_WHITE] = figma.util.rgb("#FFFFFF");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_BLACK] = figma.util.rgb("#1E1E1E");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_GRAY] = figma.util.rgb("#757575");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_RED] = figma.util.rgb("#DC3009");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_ORANGE] = figma.util.rgb("#EB7500");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_YELLOW] = figma.util.rgb("#E8A302");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_GREEN] = figma.util.rgb("#3E9B4B");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_BLUE] = figma.util.rgb("#007AD2");
CONNECTOR_NEW_COLORS[CONNECTOR_DARK_VIOLET] = figma.util.rgb("#5427B4");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_BLACK] = figma.util.rgb("#B3B3B3");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_GRAY] = figma.util.rgb("#E6E6E6");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_RED] = figma.util.rgb("#FF7556");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_ORANGE] = figma.util.rgb("#FF9E42");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_YELLOW] = figma.util.rgb("#FFC943");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_GREEN] = figma.util.rgb("#66D575");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_BLUE] = figma.util.rgb("#3DADFF");
CONNECTOR_NEW_COLORS[CONNECTOR_LIGHT_VIOLET] = figma.util.rgb("#874FFF");

const connector_colors = {
  old: CONNECTOR_OLD_COLORS,
  new: CONNECTOR_NEW_COLORS,
};

// END CONNECTOR IMPORT

const stickies = figma.currentPage.findAllWithCriteria({
  types: ["STICKY"],
});

stickies.forEach((node: StickyNode) => {
  if (Array.isArray(node.fills)) {
    const curr_color = figma.util.rgb(node.fills[0].color);
    const colorStr = JSON.stringify(curr_color);
    const colorIndex = sticky_colors.old.indexOf(colorStr);
    if (colorIndex >= 0) {
      const new_color = sticky_colors.new[colorStr];
      const fills = clone(node.fills);
      fills[0] = figma.util.solidPaint(new_color, node.fills[0]);
      node.fills = fills;
      return true;
    }
  }
});

const shapes = figma.currentPage.findAllWithCriteria({
  types: ["SHAPE_WITH_TEXT"],
});

shapes.forEach((node: ShapeWithTextNode) => {
  if (Array.isArray(node.fills)) {
    const curr_color = figma.util.rgb(node.fills[0].color);
    const colorStr = JSON.stringify(curr_color);
    const colorIndex = shape_colors.old.indexOf(colorStr);
    if (colorIndex >= 0) {
      const new_color = shape_colors.new[colorStr];
      const fills = clone(node.fills);
      fills[0] = figma.util.solidPaint(new_color, node.fills[0]);
      node.fills = fills;
      return true;
    }
  }
});

const sections = figma.currentPage.findAllWithCriteria({
  types: ["SECTION"],
});

sections.forEach((node: SectionNode) => {
  if (Array.isArray(node.fills)) {
    const curr_color = figma.util.rgb(node.fills[0].color);
    const colorStr = JSON.stringify(curr_color);
    const colorIndex = section_colors.old.indexOf(colorStr);
    if (colorIndex >= 0) {
      const new_color = section_colors.new[colorStr];
      const fills = clone(node.fills);
      fills[0] = figma.util.solidPaint(new_color, node.fills[0]);
      node.fills = fills;
      return true;
    }
  }
});

const connectors = figma.currentPage.findAllWithCriteria({
  types: ["CONNECTOR"],
});

connectors.forEach((node: ConnectorNode) => {
  if (Array.isArray(node.strokes)) {
    const curr_color = figma.util.rgb(node.strokes[0].color);
    const colorStr = JSON.stringify(curr_color);
    const colorIndex = connector_colors.old.indexOf(colorStr);
    if (colorIndex >= 0) {
      const new_color = connector_colors.new[colorStr];
      const strokes = clone(node.strokes);
      strokes[0] = figma.util.solidPaint(new_color, node.strokes[0]);
      node.strokes = strokes;
      return true;
    }
  }
});

figma.closePlugin();
