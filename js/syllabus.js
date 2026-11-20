/* =====================================================================
   syllabus.js — IB Mathematics subtopics (guide for first assessment 2021)
   You normally do NOT need to edit this file.
   hl: true  → Additional Higher Level (AHL) content, shown only on HL pages
   ===================================================================== */

const COURSES = {
  "aa-hl": { short: "HL AA", name: "Analysis & Approaches HL", syllabus: "aa", level: "HL" },
  "aa-sl": { short: "SL AA", name: "Analysis & Approaches SL", syllabus: "aa", level: "SL" },
  "ai-hl": { short: "HL AI", name: "Applications & Interpretation HL", syllabus: "ai", level: "HL" },
  "ai-sl": { short: "SL AI", name: "Applications & Interpretation SL", syllabus: "ai", level: "SL" }
};

const TOPIC_NAMES = {
  1: "Number and Algebra",
  2: "Functions",
  3: "Geometry and Trigonometry",
  4: "Statistics and Probability",
  5: "Calculus"
};

const SYLLABUS = {
  /* ---------------- ANALYSIS & APPROACHES ---------------- */
  aa: {
    1: [
      { id: "1.1", title: "Scientific notation (a × 10ᵏ)" },
      { id: "1.2", title: "Arithmetic sequences and series" },
      { id: "1.3", title: "Geometric sequences and series" },
      { id: "1.4", title: "Financial applications: compound interest and depreciation" },
      { id: "1.5", title: "Laws of exponents (integer exponents) and introduction to logarithms" },
      { id: "1.6", title: "Simple deductive proof" },
      { id: "1.7", title: "Laws of exponents (rational exponents) and laws of logarithms" },
      { id: "1.8", title: "Sum of infinite geometric sequences" },
      { id: "1.9", title: "The binomial theorem" },
      { id: "1.10", title: "Counting principles, permutations and combinations; extended binomial theorem", hl: true },
      { id: "1.11", title: "Partial fractions", hl: true },
      { id: "1.12", title: "Complex numbers: Cartesian form and the Argand diagram", hl: true },
      { id: "1.13", title: "Complex numbers: modulus–argument (polar) and Euler form", hl: true },
      { id: "1.14", title: "Conjugate roots of polynomials, De Moivre's theorem and roots of complex numbers", hl: true },
      { id: "1.15", title: "Proof by induction, contradiction and counterexample", hl: true },
      { id: "1.16", title: "Systems of linear equations (up to 3 unknowns)", hl: true }
    ],
    2: [
      { id: "2.1", title: "Equations of a straight line" },
      { id: "2.2", title: "Functions: domain, range, graph and inverse" },
      { id: "2.3", title: "The graph of a function" },
      { id: "2.4", title: "Key features of graphs and intersections" },
      { id: "2.5", title: "Composite and inverse functions" },
      { id: "2.6", title: "The quadratic function" },
      { id: "2.7", title: "Quadratic equations and inequalities; the discriminant" },
      { id: "2.8", title: "Reciprocal and rational functions" },
      { id: "2.9", title: "Exponential and logarithmic functions" },
      { id: "2.10", title: "Solving equations analytically and graphically" },
      { id: "2.11", title: "Transformations of graphs" },
      { id: "2.12", title: "Polynomial functions; factor and remainder theorems; sum and product of roots", hl: true },
      { id: "2.13", title: "Rational functions", hl: true },
      { id: "2.14", title: "Odd and even functions; self-inverse functions; restricting domains", hl: true },
      { id: "2.15", title: "Solving inequalities graphically and analytically", hl: true },
      { id: "2.16", title: "Graphs of |f(x)|, f(|x|), 1/f(x), f(ax+b), [f(x)]²; modulus equations", hl: true }
    ],
    3: [
      { id: "3.1", title: "3D geometry: distance, midpoint, volume and surface area" },
      { id: "3.2", title: "Right-angled trigonometry, sine rule, cosine rule, area of a triangle" },
      { id: "3.3", title: "Applications of trigonometry: bearings, elevation and depression" },
      { id: "3.4", title: "The circle: radians, arc length and sector area" },
      { id: "3.5", title: "The unit circle and exact values" },
      { id: "3.6", title: "Pythagorean identity and double angle identities" },
      { id: "3.7", title: "Circular functions and their graphs" },
      { id: "3.8", title: "Solving trigonometric equations" },
      { id: "3.9", title: "Reciprocal and inverse trigonometric functions", hl: true },
      { id: "3.10", title: "Compound angle identities", hl: true },
      { id: "3.11", title: "Symmetry properties of trigonometric graphs", hl: true },
      { id: "3.12", title: "Introduction to vectors", hl: true },
      { id: "3.13", title: "The scalar product and angles between vectors", hl: true },
      { id: "3.14", title: "Vector equation of a line; kinematics", hl: true },
      { id: "3.15", title: "Parallel, intersecting and skew lines", hl: true },
      { id: "3.16", title: "The vector product and areas", hl: true },
      { id: "3.17", title: "Vector equations of a plane", hl: true },
      { id: "3.18", title: "Intersections and angles of lines and planes", hl: true }
    ],
    4: [
      { id: "4.1", title: "Population, sampling and types of data" },
      { id: "4.2", title: "Presentation of data: histograms, cumulative frequency, box plots" },
      { id: "4.3", title: "Measures of central tendency and dispersion" },
      { id: "4.4", title: "Linear correlation and the regression line of y on x" },
      { id: "4.5", title: "Probability concepts and expected number of occurrences" },
      { id: "4.6", title: "Venn diagrams, tree diagrams, combined and conditional probability" },
      { id: "4.7", title: "Discrete random variables and expected value" },
      { id: "4.8", title: "The binomial distribution" },
      { id: "4.9", title: "The normal distribution" },
      { id: "4.10", title: "Regression line of x on y" },
      { id: "4.11", title: "Conditional probability formulae and testing independence" },
      { id: "4.12", title: "Standardisation (z-values) and inverse normal" },
      { id: "4.13", title: "Bayes' theorem", hl: true },
      { id: "4.14", title: "Continuous random variables; variance and E(aX + b)", hl: true }
    ],
    5: [
      { id: "5.1", title: "Introduction to limits and the derivative" },
      { id: "5.2", title: "Increasing and decreasing functions" },
      { id: "5.3", title: "Differentiating axⁿ and sums of terms" },
      { id: "5.4", title: "Tangents and normals" },
      { id: "5.5", title: "Introduction to integration and areas" },
      { id: "5.6", title: "Derivatives of standard functions; chain, product and quotient rules" },
      { id: "5.7", title: "The second derivative" },
      { id: "5.8", title: "Stationary points, optimisation and points of inflexion" },
      { id: "5.9", title: "Kinematics" },
      { id: "5.10", title: "Indefinite integration; integration by inspection and substitution" },
      { id: "5.11", title: "Definite integrals and areas between curves" },
      { id: "5.12", title: "First principles, continuity and differentiability", hl: true },
      { id: "5.13", title: "Limits and L'Hôpital's rule", hl: true },
      { id: "5.14", title: "Implicit differentiation, related rates and optimisation", hl: true },
      { id: "5.15", title: "Derivatives of further functions (tan, sec, aˣ, arcsin, …) and related integrals", hl: true },
      { id: "5.16", title: "Integration by substitution and by parts", hl: true },
      { id: "5.17", title: "Areas with the y-axis and volumes of revolution", hl: true },
      { id: "5.18", title: "First order differential equations", hl: true },
      { id: "5.19", title: "Maclaurin series", hl: true }
    ]
  },

  /* ---------------- APPLICATIONS & INTERPRETATION ---------------- */
  ai: {
    1: [
      { id: "1.1", title: "Scientific notation (a × 10ᵏ)" },
      { id: "1.2", title: "Arithmetic sequences and series" },
      { id: "1.3", title: "Geometric sequences and series" },
      { id: "1.4", title: "Financial applications: compound interest and depreciation" },
      { id: "1.5", title: "Laws of exponents (integer exponents) and introduction to logarithms" },
      { id: "1.6", title: "Approximation, upper and lower bounds, percentage error" },
      { id: "1.7", title: "Amortisation and annuities" },
      { id: "1.8", title: "Systems of linear equations and polynomial equations (with technology)" },
      { id: "1.9", title: "Laws of logarithms", hl: true },
      { id: "1.10", title: "Simplifying expressions with rational exponents", hl: true },
      { id: "1.11", title: "Sum of infinite geometric sequences", hl: true },
      { id: "1.12", title: "Complex numbers: Cartesian form and the Argand diagram", hl: true },
      { id: "1.13", title: "Complex numbers: polar and exponential form", hl: true },
      { id: "1.14", title: "Matrices: algebra, determinants, inverses and systems of equations", hl: true },
      { id: "1.15", title: "Eigenvalues, eigenvectors and diagonalisation", hl: true }
    ],
    2: [
      { id: "2.1", title: "Equations of a straight line; parallel and perpendicular lines" },
      { id: "2.2", title: "Functions: domain, range, graph and inverse" },
      { id: "2.3", title: "The graph of a function" },
      { id: "2.4", title: "Key features of graphs and intersections (with technology)" },
      { id: "2.5", title: "Modelling with linear, quadratic, exponential, cubic and sinusoidal functions" },
      { id: "2.6", title: "The modelling process" },
      { id: "2.7", title: "Composite and inverse functions in context", hl: true },
      { id: "2.8", title: "Transformations of graphs", hl: true },
      { id: "2.9", title: "Further modelling: exponential, logarithmic, logistic and piecewise", hl: true },
      { id: "2.10", title: "Logarithmic scales and linearising data", hl: true }
    ],
    3: [
      { id: "3.1", title: "3D geometry: distance, midpoint, volume and surface area" },
      { id: "3.2", title: "Right-angled trigonometry, sine rule, cosine rule, area of a triangle" },
      { id: "3.3", title: "Applications of trigonometry: bearings, elevation and depression" },
      { id: "3.4", title: "The circle: arc length and sector area (degrees)" },
      { id: "3.5", title: "Equations of perpendicular bisectors" },
      { id: "3.6", title: "Voronoi diagrams" },
      { id: "3.7", title: "Radian measure, arc length and sector area", hl: true },
      { id: "3.8", title: "The unit circle, Pythagorean identity and the ambiguous case", hl: true },
      { id: "3.9", title: "Geometric transformations with matrices", hl: true },
      { id: "3.10", title: "Introduction to vectors", hl: true },
      { id: "3.11", title: "Vector equation of a line", hl: true },
      { id: "3.12", title: "Vector applications to kinematics", hl: true },
      { id: "3.13", title: "Scalar and vector products", hl: true },
      { id: "3.14", title: "Graph theory: definitions and terminology", hl: true },
      { id: "3.15", title: "Adjacency matrices and walks", hl: true },
      { id: "3.16", title: "Tree and cycle algorithms: Kruskal, Prim, Chinese postman, travelling salesman", hl: true }
    ],
    4: [
      { id: "4.1", title: "Population, sampling and types of data" },
      { id: "4.2", title: "Presentation of data: histograms, cumulative frequency, box plots" },
      { id: "4.3", title: "Measures of central tendency and dispersion" },
      { id: "4.4", title: "Linear correlation and the regression line of y on x" },
      { id: "4.5", title: "Probability concepts and expected number of occurrences" },
      { id: "4.6", title: "Venn diagrams, tree diagrams, combined and conditional probability" },
      { id: "4.7", title: "Discrete random variables and expected value" },
      { id: "4.8", title: "The binomial distribution" },
      { id: "4.9", title: "The normal distribution" },
      { id: "4.10", title: "Spearman's rank correlation coefficient" },
      { id: "4.11", title: "Hypothesis testing: χ² tests and the t-test" },
      { id: "4.12", title: "Designing data collection; reliability and validity", hl: true },
      { id: "4.13", title: "Non-linear regression and the coefficient of determination", hl: true },
      { id: "4.14", title: "Linear transformations and combinations of random variables; unbiased estimates", hl: true },
      { id: "4.15", title: "Combinations of normal variables and the central limit theorem", hl: true },
      { id: "4.16", title: "Confidence intervals for the mean", hl: true },
      { id: "4.17", title: "The Poisson distribution", hl: true },
      { id: "4.18", title: "Critical regions, further hypothesis tests, type I and II errors", hl: true },
      { id: "4.19", title: "Transition matrices and Markov chains", hl: true }
    ],
    5: [
      { id: "5.1", title: "Introduction to limits and the derivative" },
      { id: "5.2", title: "Increasing and decreasing functions" },
      { id: "5.3", title: "Differentiating axⁿ" },
      { id: "5.4", title: "Tangents and normals" },
      { id: "5.5", title: "Introduction to integration and areas" },
      { id: "5.6", title: "Stationary points: local maxima and minima" },
      { id: "5.7", title: "Optimisation in context" },
      { id: "5.8", title: "The trapezoidal rule" },
      { id: "5.9", title: "Derivatives of standard functions; chain, product and quotient rules; related rates", hl: true },
      { id: "5.10", title: "The second derivative and concavity", hl: true },
      { id: "5.11", title: "Further integration; integration by inspection and substitution", hl: true },
      { id: "5.12", title: "Areas with the y-axis and volumes of revolution", hl: true },
      { id: "5.13", title: "Kinematics", hl: true },
      { id: "5.14", title: "Setting up and solving differential equations by separation of variables", hl: true },
      { id: "5.15", title: "Slope fields", hl: true },
      { id: "5.16", title: "Euler's method", hl: true },
      { id: "5.17", title: "Coupled differential equations and phase portraits", hl: true },
      { id: "5.18", title: "Second order differential equations", hl: true }
    ]
  }
};

/* Returns the subtopics of one topic for one course (SL pages hide AHL). */
function getSubtopics(courseKey, topicNum) {
  const c = COURSES[courseKey];
  const list = SYLLABUS[c.syllabus][topicNum] || [];
  return c.level === "HL" ? list : list.filter(s => !s.hl);
}
