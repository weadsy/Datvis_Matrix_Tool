// Catch all uncaught errors:
window.onerror = function (message, source, lineno, colno, error) {
alert(
    `JavaScript error:\n` +
    `Message: ${message}\n` +
    `Source: ${source}\n` +
    `Line: ${lineno}, Column: ${colno}`
);
// return false to let the error also go to the console if devtools is open
return false;
};

window.onunhandledrejection = function (event) {
alert(
    `Unhandled Promise rejection:\n` +
    `Reason: ${event.reason}\n`
);
// Optionally: return false to let it go to the console too
//return false;
};

function p(word) {
console.log(word);
}

document.addEventListener("DOMContentLoaded", () => {
    // Landing overlay logic
    const landingOverlay = document.getElementById("landingOverlay");
    const continueBtn = document.getElementById("continueBtn");
    const scaleToolBtn = document.getElementById("scaleToolBtn");

    const tutorialOverlay = document.getElementById("landingOverlay2");
    const YES_Btn = document.getElementById("YES_Btn");
    const NO_Btn = document.getElementById("NO_Btn");

    let onLandingPage = true;

    document.getElementById("reset-btn").addEventListener("click", () => {
        localStorage.setItem("isReset", "true");
        window.location.reload();
    });

    // Check if we've shown the landing page before
    let isReset = localStorage.getItem("isReset") === "true";

    // If we want to always show it (or haven't seen it yet)
    if (!isReset) {
        landingOverlay.classList.remove("hidden");
    } else {
        landingOverlay.classList.add("hidden");
        onLandingPage = false;
    }

    localStorage.setItem("isReset", "false");

    const floatingTutorialSeen = getCookie("floatingTutorialSeen");

    tutorialOverlay.classList.add("hidden");
    // Scale tool button - hide overlay and save preference
    continueBtn.addEventListener("click", function () {
        landingOverlay.classList.add("hidden");

        onLandingPage = false;
        //await sleep(100);

        if (!floatingTutorialSeen) {
        tutorialOverlay.classList.remove("hidden");
        }

        //document.addEventListener("click", drawLineFromClick);
    });

    YES_Btn.addEventListener("click", function () {
        tutorialOverlay.classList.add("hidden");

        disableEdits();
        showTutorialStep(tutorialStep);
    });

    NO_Btn.addEventListener("click", function () {
        setCookie("floatingTutorialSeen", true, 14);
        localStorage.setItem("isReset", "true");
        window.location.reload();
        //tutorialOverlay.classList.add("hidden");
    });


    // Matrix tool button (placeholder for now)
    scaleToolBtn.addEventListener("click", function () {
        window.location.href = "/scale_tool/";
    });

    const isLocal = location.hostname === "127.0.0.1";
    //console.log('t',location.hostname);
    const reactAppUrl = isLocal ? "http://localhost:5173" : "/neural_net_builder/";

    neuralNetBtn.addEventListener("click", function () {
        window.location.href = reactAppUrl;
    });

    // Floating tutorial logic
    const floatingTutorial = document.getElementById("floating-tutorial");
    const floatingTutorialText = document.getElementById(
        "floating-tutorial-text"
    );
    const floatingTutorialNext = document.getElementById(
        "floating-tutorial-next"
    );

    /* const tutorialSteps = [
        { text: "Choose one of the default matrix options", x: 1125, y: 462 },
        { text: "Zoom out with mouse wheel or slider", x: 1295, y: 168 },
        { text: "Click and drag to make a selection around the matrix", x: 940, y: 190 },
        { text: "The matrix is now selected, try dragging it to the center of the screen", x: 913, y: 225 },
        { text: "Turn on 'Edit Matrix'",  x: 343, y: 78 },
        { text: "Select a matrix entry to edit. Navigate entries using arrow keys on your keyboard", x: 945, y: 162, },
        { text: "Use arrow buttons on the bottom and right to add or remove columns/rows", x: 945, y: 162, },
        { text: "Give the matrix a name to save it in cookies", x: 913, y: 225  },
        { text: "Now that the matrix is selected we can do matrix operations", x: 1219, y: 87  },
        { text: "Click the Transpose button (A<sup>T</sup>) ", x: 1219, y: 87  },
        { text: "Click copy button to make a copy of the selected matrix (or spawn saved)", x: 220, y: 97  },
        { text: "Drag the copied matrix to the right of the original", x: 1250, y: 210  },
        { text: "Make another rectangle selection containing both matrices", x: 1250, y: 210 },
        { text: "Click the matrix addition button (A + B)", x: 1219, y: 87  },
        { text: "Adjust the speed of the animation to make operations slower or faster", x: 670, y: 519  },
        { text: "Click the undo button to undo the previous operation", x: 165, y: 112  },
        { text: "The delete button will delete any selected blocks", x: 165, y: 112  },
        { text: "Try out the rest of the matrix operation buttons", x: 1219, y: 87  }
    ]; */
    const tutorialSteps = [
        { text: "Choose one of the default matrix options", x: 0.60, y: 0.55 },
        { text: "Zoom out with mouse wheel or slider", x: 0.69, y: 0.20 },
        { text: "Click and drag to make a selection around the matrix", x: 0.50, y: 0.23 },
        { text: "The matrix is now selected, try dragging it to the center of the screen", x: 0.48, y: 0.27 },
        { text: "Turn on 'Edit Matrix'", x: 0.18, y: 0.09 },
        { text: "Select a matrix entry to edit. Navigate entries using arrow keys on your keyboard", x: 0.50, y: 0.19 },
        { text: "Use arrow buttons on the bottom and right to add or remove columns/rows", x: 0.50, y: 0.19 },
        { text: "Give the matrix a name to save it in cookies", x: 0.48, y: 0.27 },
        { text: "Now that the matrix is selected we can do matrix operations", x: 0.64, y: 0.10 },
        { text: "Click the Transpose button (A<sup>T</sup>) ", x: 0.64, y: 0.10 },
        { text: "Click copy button to make a copy of the selected matrix (or spawn saved)", x: 0.12, y: 0.12 },
        { text: "Drag the copied matrix to the right of the original", x: 0.66, y: 0.25 },
        { text: "Make another rectangle selection containing both matrices", x: 0.66, y: 0.25 },
        { text: "Click the matrix addition button (A + B)", x: 0.64, y: 0.10 },
        { text: "Adjust the speed of the animation to make operations slower or faster", x: 0.35, y: 0.62 },
        { text: "Click the undo button to undo the previous operation", x: 0.09, y: 0.15 },
        { text: "The delete button will delete any selected blocks", x: 0.09, y: 0.15 },
        { text: "Try out the rest of the matrix operation buttons", x: 0.64, y: 0.10 }
    ];

    let tutorialStep = 0;

    function showTutorialStep(step) {
        const s = tutorialSteps[step];

        // Clear previous Typed.js instance if needed
        if (window.currentTyped) {
        window.currentTyped.destroy();
        }
        floatingTutorialText.textContent = "";
        floatingTutorial.style.display = "flex";

        if (typeof s.x === "number" && typeof s.y === "number") {
        const containerRect = container.getBoundingClientRect();
        floatingTutorial.style.left = (containerRect.left + containerRect.width * s.x) + "px";
        floatingTutorial.style.top = (containerRect.top + containerRect.height * s.y) + "px";
        }

        window.currentTyped = new Typed('#floating-tutorial-text', {
        strings: [s.text],
        typeSpeed: 10,
        showCursor: false
        });

        if (step == tutorialSteps.length - 1) {
        floatingTutorialNext.textContent = 'Done';
        setCookie("floatingTutorialSeen", true, 14);
        }
    }

    floatingTutorialNext.addEventListener("click", () => {
        tutorialStep++;
        if (tutorialStep < tutorialSteps.length) {
        showTutorialStep(tutorialStep);
        } else {
        floatingTutorial.style.display = "none";
        }
    });

    function drawLineFromClick(e) {
        const x = e.clientX;
        const y = e.clientY;
        const coordText = `x: ${x}, y: ${y}`;
        console.log(coordText);
        //console.log("x: %d, y: %d", x, y);

        navigator.clipboard.writeText(coordText);

        // Remove any previous line
        const oldLine = document.getElementById("floating-tutorial-line");
        if (oldLine) oldLine.remove();

        // Create the line
        const line = document.createElement("div");
        line.id = "floating-tutorial-line";
        line.style.position = "fixed";
        line.style.left = x + "px";
        line.style.top = y + "px";
        line.style.width = "15rem"; // 15rem = 240px if root font-size is 16px
        line.style.height = "3px";
        line.style.background = "yellow";
        line.style.zIndex = "9999";
        line.style.pointerEvents = "none";

        document.body.appendChild(line);
    }

    // how close to the edge (in px) before we show UI:
    const SHOW_MARGIN = 100;
    const HIDE_MARGIN = 190;
    const editCheckBox = document.getElementById("edit-labels");
    editCheckBox.checked = true;

    //const cb = document.getElementById("edit-labels");
    const label = document.getElementById("edit-labels-label");

    label.classList.toggle("flash");

    editCheckBox.addEventListener("change", () => {
        // if checked, add the flash class to the label; otherwise remove it
        label.classList.toggle("flash", editCheckBox.checked);
    });

    function disableEdits() {
        editCheckBox.checked = false;

        const boxInputs = document.querySelectorAll(".box-input");
        boxInputs.forEach((input) => {
        input.classList.add("disabled");
        input.classList.remove("flash-border");
        });

        label.classList.remove("flash");
        removeArrowButtons();
    }

    // grab all your controls:
    const uiControls = document.querySelectorAll(".ui-control");
    uiControls.forEach((el) => el.classList.add("visible"));

    function updateUI(e) {
        if (isSelecting || isDragging || onLandingPage) return;
        const x = e.clientX,
        y = e.clientY;
        const w = window.innerWidth,
        h = window.innerHeight;

        // detect if UI is already visible (all controls share .visible)
        const uiVisible = uiControls[0].classList.contains("visible");

        // pick the appropriate margin
        const MARGIN = uiVisible ? HIDE_MARGIN : SHOW_MARGIN;

        // if pointer is within MARGIN of ANY edge:
        const nearEdge =
        x < MARGIN || x > w - MARGIN || y < MARGIN || y > h - MARGIN;

        uiControls.forEach((el) => {
        if (editCheckBox.checked || !floatingTutorialSeen) {
            el.classList.add("visible");
        } else {
            el.classList.toggle("visible", nearEdge);
        }
        });
    }

    // listen once on the whole document:
    document.addEventListener("mousemove", updateUI);

    // also trigger on touch (optional):
    //document.addEventListener("touchstart", updateUI);

    // keep track of clusters the user has “locked” by clicking their badge
    const lockedBoxes = new Set();

    const panel = document.getElementById("panel");
    const container = document.getElementById("container");
    const squareLength = 3;
    let COUNT = squareLength * squareLength;
    const SIZE = 96; // px
    const GAP = 16; // px WIP
    const SIZEGAP = SIZE + GAP;
    let zoomLevel = 0.6;

    let history = [];
    let isRestoring = false;

    function getMatrixState() {
        return Array.from(container.querySelectorAll(".box")).map((box) => ({
        x: +box.dataset.x,
        y: +box.dataset.y,
        value: box.querySelector(".box-input").value,
        selected: box.classList.contains("selected"),
        locked: box.classList.contains("locked"),
        }));
    }

    function setMatrixState(state) {
        isRestoring = true;
        // Remove all boxes
        container.querySelectorAll(".box").forEach((box) => box.remove());
        // Rebuild boxes
        state.forEach((data) => {
        createBox(data.x, data.y, data.value);
        const box = container.lastChild;
        if (data.selected) box.classList.add("selected");
        if (data.locked) box.classList.add("locked");
        });
        isRestoring = false;
        renderClusterLabels();
        updateArrowButtons();
    }

    // Call this after every user action that changes the matrix
    function saveHistory() {
        if (isRestoring) return;
        history.push(JSON.parse(JSON.stringify(getMatrixState())));
        // Optionally limit history size
        if (history.length > 100) history.shift();
    }

    // Undo handler
    const undobtn = document.getElementById("undo-btn");
    undobtn.addEventListener("click", () => {
        //e.preventDefault();
        if (history.length <= 1) return; // Prevent undoing past the first state
        history.pop(); // Remove current state
        setMatrixState(history[history.length - 1]);
    });

    function clearMatrixIdFromCluster(changedBox) {
        if (!changedBox.dataset.matrixId) return; // Already has no matrix ID

        const matrixId = changedBox.dataset.matrixId;

        // Find all boxes with the same matrix ID (same cluster)
        const clusterBoxes = Array.from(container.querySelectorAll(`[data-matrix-id="${matrixId}"]`));

        // Remove the matrix ID from all boxes in this cluster
        clusterBoxes.forEach(box => {
        delete box.dataset.matrixId;
        });

        console.log(`Matrix ID "${matrixId}" cleared from ${clusterBoxes.length} boxes due to value change`);

        // Update the cluster labels to show blank names
        renderClusterLabels();
    }

    function adjustBoxInput(input, defaultLength = 2) {
        // Clear matrix ID when value changes (only if this is a user edit, not programmatic)
        if (!isRestoring) {
        const box = input.closest('.box');
        if (box && box.dataset.matrixId) {
            clearMatrixIdFromCluster(box);
        }
        }

        const extra = Math.max(0, input.value.length - defaultLength);
        // Base width and font size
        let width = 50; // percent
        let fontSize = 2; // rem
        let fontOffset = 3;

        if (extra > 0) {
        let hasDec = input.value.includes('.');
        let hasNeg = (input.value.charAt(0) === '-');
        //if (input.value.charAt(0) === '-') isNeg = 3;
        if (!hasDec && !hasNeg) {
            fontOffset = 0;
        }
        width += extra * (10 - fontOffset);
        fontSize -= extra * 0.2;
        fontSize = Math.max(fontSize, 1); // Prevent too small
        }

        input.style.width = width + "%";
        input.style.fontSize = fontSize + "rem";
    }

    // 1) create boxes (blank)
    function defaultMatrix(
        matrixNum = 1,
        numArray = [1, 2, 3, 0, 1, 4, 5, 6, 0]
    ) {
        xOffset = 4 * SIZEGAP * matrixNum;
        for (let i = 0; i < numArray.length; i++) {
        const box = document.createElement("div");
        box.className = [
            "box",
            "absolute",
            "w-24",
            "h-24",
            "bg-gray-700",
            "rounded-lg",
            "shadow-lg",
            "cursor-move",
        ].join(" "); // 'floating'
        const cols = Math.sqrt(numArray.length); // number of columns you want in your grid
        const startX = xOffset + 650 + (i % cols) * (SIZE + GAP);
        const startY = 250 + Math.floor(i / cols) * (SIZE + GAP);
        box.style.left = startX + "px";
        box.style.top = startY + "px";
        box.dataset.x = startX;
        box.dataset.y = startY;

        const input = document.createElement("input");
        input.type = "text"; // or "number" if you prefer
        input.value = numArray[i]; //document.getElementById("block-value").value; // initialize it
        input.className = "box-input";
        input.addEventListener("change", saveHistory); //SAVE MATRIX HISTORY FOR UNDO*****************
        input.addEventListener("change", () => adjustBoxInput(input));
        
        box.appendChild(input);
        
        box.classList.add("selected");
        // random float phase
        //box.style.animationDelay = `-${Math.random()*3}s`;
        container.appendChild(box);
        }
    }
    //defaultMatrix();
    if (floatingTutorialSeen)
        defaultMatrix(1);
    defaultMatrix(2, [2]);

    saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
    renderClusterLabels();

    // helper: create a new box at (x,y) and hook up dragging
    let indx = COUNT;

    function createBox(x, y, value) {
        const box = document.createElement("div");
        box.className = [
        "box",
        "absolute",
        "w-24",
        "h-24",
        "bg-gray-700",
        "rounded-lg",
        "shadow-lg",
        "cursor-move",
        ].join(" ");
        box.style.left = x + "px";
        box.style.top = y + "px";
        box.dataset.x = x;
        box.dataset.y = y;
        box.style.animationDelay = `-${Math.random() * 3}s`;

        const input = document.createElement("input");
        input.type = "text"; // or "number" if you prefer
        input.className = "box-input";
        input.addEventListener("change", saveHistory); //SAVE MATRIX HISTORY FOR UNDO*****************
        input.addEventListener("change", () => adjustBoxInput(input));

        if (!editCheckBox.checked) {
        input.classList.add("disabled");
        }
        box.appendChild(input);

        container.appendChild(box);

        if (floatingTutorialSeen || (!floatingTutorialSeen && tutorialStep > 1))
        box.classList.add("selected");

        if (value) {
        input.value = value;
        } else {
        indx += 1;
        input.value = 0;
        }
        adjustBoxInput(input);

        //if (isCopy) box.classList.add(".inSelection");
        //interact(box).draggable(dragConfig);

        return box;
    }

    // 2) selection‐rectangle (scaled!)
    let isSelecting = false,
        selDiv = null,
        selStart = { x: 0, y: 0 };

    function clearLabels() {
        container
        .querySelectorAll(".sel-count-label")
        .forEach((el) => el.remove());
    }

    function clearSelection() {
        // only un-select boxes that aren't locked
        container.querySelectorAll(".box.selected").forEach((el) => {
        if (!lockedBoxes.has(el)) {
            el.classList.remove("selected");

            // remove any old count‐labels
            clearLabels();
        }
        });
        // 1) clear any prior inSelection flags
        container
        .querySelectorAll(".box.inSelection")
        .forEach((el) => el.classList.remove("inSelection"));

        removeArrowButtons();
    }

    function clusterBoxes(boxes, proximity = SIZE + 20) {
        const n = boxes.length;
        if (n === 0) return [];
        const parent = [...Array(n).keys()];
        function find(i) {
        return parent[i] === i ? i : (parent[i] = find(parent[i]));
        }
        function union(a, b) {
        parent[find(b)] = find(a);
        }
        for (let i = 0; i < n; i++) {
        const xi = +boxes[i].dataset.x,
            yi = +boxes[i].dataset.y;
        for (let j = i + 1; j < n; j++) {
            const xj = +boxes[j].dataset.x,
            yj = +boxes[j].dataset.y;
            if (
            Math.abs(xi - xj) <= proximity &&
            Math.abs(yi - yj) <= proximity
            ) {
            union(i, j);
            }
        }
        }
        const groups = {};
        for (let i = 0; i < n; i++) {
        const r = find(i);
        (groups[r] ||= []).push(boxes[i]);
        }
        return Object.values(groups);
    }

    // Object to store named matrices
    let namedMatrices = {};

    function saveMatricesToCookies() {
        try {
        const matrixData = JSON.stringify(namedMatrices);
        setCookie("savedMatrices", matrixData, 364); // Save for 7 days
        console.log("Matrices saved to cookies");
        } catch (error) {
        console.error("Error saving matrices to cookies:", error);
        }
    }

    const defaultMatrices = {
        "Identity 3x3": {
        data: [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ],
        size: 9
        },
        "Zero 3x3": {
        data: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ],
        size: 9
        },
        "Identity 2x2": {
        data: [
            [1, 0],
            [0, 1]
        ],
        size: 4
        },
        "Zero 2x2": {
        data: [
            [0, 0],
            [0, 0]
        ],
        size: 4
        },
    };

    function arrayToMatrix(arr) {
        let data = [];
        for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            data.push({
            value: arr[i][j],
            relativeX: j * SIZEGAP,
            relativeY: i * SIZEGAP
            });
        }
        }

        return data;
    }


    function loadMatricesFromCookies() {
        try {
        const matrixData = getCookie("savedMatrices");
        if (matrixData) {
            namedMatrices = JSON.parse(matrixData);
            console.log("Matrices loaded from cookies:", Object.keys(namedMatrices));

            //defaultMatrices = createDefaultMatrices();

            // Iterate through default matrices and add them if they don't exist
            /* Object.keys(defaultMatrices).forEach((matrixName) => {
            if (!namedMatrices[matrixName]) {
                namedMatrices[matrixName] = defaultMatrices[matrixName];
            }
            }); */
            
            
            //saveMatricesToCookies();
            updateMatrixMenu();
        } else {
            console.log("No saved matrices found in cookies");
        }
        } catch (error) {
        console.error("Error loading matrices from cookies:", error);
        namedMatrices = {}; // Reset to empty object on error
        }

        for (const [name, matrix] of Object.entries(defaultMatrices)) {
        namedMatrices[name] = {
            data: arrayToMatrix(matrix.data),
            timestamp: Date.now(),
            size: matrix.size
        };
        }
    }

    function renderClusterLabels() {
        // 1) clear old labels
        clearLabels();

        // 2) grab current selected boxes
        const els = Array.from(container.querySelectorAll(".box.selected"));
        if (!els.length) return;

        const matrices = clusterBoxes(els);

        // 5) for each group, append a label
        matrices.forEach((cluster, index) => {
        // compute bounding‐box of this cluster
        const xs = cluster.map((el) => +el.dataset.x),
            ys = cluster.map((el) => +el.dataset.y);
        const minX = Math.min(...xs),
            maxX = Math.max(...xs) + SIZE,
            minY = Math.min(...ys);

        const lbl = document.createElement("input");
        lbl.className = [
            "sel-count-label",
            "matrix-name-input",
            "bg-gray-700",
            "text-white",
            "px-2",
            "py-1",
            "rounded",
            "shadow",
            "pointer-events-auto",
            "z-20",
        ].join(" ");

        lbl.type = "text";
        lbl.placeholder = "Name matrix";

        // Check if this cluster already has a name by looking at the first element's data-matrix-id
        const existingMatrixId = cluster[0].dataset.matrixId;
        lbl.value = existingMatrixId || "";

        // Auto-resize function
        function autoResize() {
            // Create a temporary span to measure text width
            const temp = document.createElement("span");
            temp.style.visibility = "hidden";
            temp.style.position = "absolute";
            temp.style.fontSize = getComputedStyle(lbl).fontSize;
            temp.style.fontFamily = getComputedStyle(lbl).fontFamily;
            temp.style.padding = "0 0.5rem"; // Account for padding
            temp.textContent = lbl.value || lbl.placeholder;
            document.body.appendChild(temp);

            const width = Math.max(temp.offsetWidth + 16, 48); // min 3rem (48px)
            lbl.style.width = Math.min(width, 192) + "px"; // max 12rem (192px)

            document.body.removeChild(temp);
        }

        // Event listeners for auto-resize and saving
        lbl.addEventListener("input", autoResize);
        lbl.addEventListener("blur", () => {
            if (lbl.value.trim()) {
            saveNamedMatrix(lbl.value.trim(), cluster);
            } else if (existingMatrixId) {
            // If they cleared the name, remove the matrix ID from all blocks
            removeMatrixId(cluster);
            // Also remove from matrices and cookies
            deleteNamedMatrix(existingMatrixId);
            }
        });
        lbl.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
            lbl.blur(); // Trigger the save
            }
        });

        // Initial resize
        autoResize();

        // position & cancel zoom
        const labelX = minX + (maxX - minX) / 2;
        const labelY = minY - 50;
        lbl.style.left = `${labelX}px`;
        lbl.style.top = `${labelY}px`;
        lbl.style.transformOrigin = "center bottom";
        lbl.style.transform = `translateX(-50%) scale(${1 / zoomLevel})`;

        container.appendChild(lbl);
        });
    }

    function saveNamedMatrix(name, cluster) {
        // Extract matrix data
        const matrixData = cluster.map(el => ({
        value: el.querySelector("input.box-input").value,
        relativeX: parseFloat(el.dataset.x) - Math.min(...cluster.map(e => parseFloat(e.dataset.x))),
        relativeY: parseFloat(el.dataset.y) - Math.min(...cluster.map(e => parseFloat(e.dataset.y)))
        }));

        // Add the matrix ID to each block in the cluster
        cluster.forEach(el => {
        el.dataset.matrixId = name;
        });

        namedMatrices[name] = {
        data: matrixData,
        timestamp: Date.now(),
        size: cluster.length
        };

        console.log(`Matrix "${name}" saved with ${cluster.length} elements`);

        // Save to cookies whenever a matrix is saved
        saveMatricesToCookies();
        updateMatrixMenu();
    }

    function removeMatrixId(cluster) {
        // Remove the matrix ID from all blocks in the cluster
        cluster.forEach(el => {
        delete el.dataset.matrixId;
        });
    }

    function spawnNamedMatrix(name, x = null, y = null) {
        if (!namedMatrices[name]) {
        alert(`Matrix "${name}" not found`);
        return;
        }

        const matrix = namedMatrices[name];

        // If no coordinates provided, spawn near center of view
        let baseX = x;
        let baseY = y;

        if (baseX === null || baseY === null) {
        const containerRect = container.getBoundingClientRect();
        baseX = (containerRect.width / 2) / zoomLevel;
        baseY = (containerRect.height / 2) / zoomLevel;
        }

        // Clear current selection
        clearSelection();

        // Create boxes for the matrix and assign them the matrix ID
        matrix.data.forEach(item => {
        const newX = baseX + item.relativeX;
        const newY = baseY + item.relativeY;
        const newBox = createBox(newX, newY, item.value);
        newBox.dataset.matrixId = name; // Assign the matrix ID to the spawned box
        });

        console.log(`Matrix "${name}" spawned at (${baseX}, ${baseY})`);
        saveHistory();
        enableArrowNavigation();
    }

    function listNamedMatrices() {
        return Object.keys(namedMatrices).map(name => ({
        name,
        size: namedMatrices[name].size,
        timestamp: namedMatrices[name].timestamp
        }));
    }

    function deleteNamedMatrix(name) {
        if (namedMatrices[name]) {
        // Remove the matrix ID from all blocks that have this name
        container.querySelectorAll(`[data-matrix-id="${name}"]`).forEach(el => {
            delete el.dataset.matrixId;
        });

        delete namedMatrices[name];
        console.log(`Matrix "${name}" deleted`);

        // Update cookies whenever a matrix is deleted
        saveMatricesToCookies();
        updateMatrixMenu();
        }
    }

    // Placeholder for future matrix menu UI
    function updateMatrixMenu() {
        const menuContent = document.getElementById("matrix-menu-content");
        const noMatricesMsg = document.getElementById("no-matrices-msg");

        // Clear existing content
        menuContent.innerHTML = "";

        const matrixNames = Object.keys(namedMatrices);

        if (matrixNames.length === 0) {
        // Show "no matrices" message
        const noMsg = document.createElement("p");
        noMsg.className = "text-sm text-gray-300 text-center";
        noMsg.id = "no-matrices-msg";
        noMsg.textContent = "No saved matrices";
        menuContent.appendChild(noMsg);
        } else {
        // Create buttons for each matrix
        matrixNames.forEach(name => {
            const matrix = namedMatrices[name];

            // Container for button and delete
            const buttonContainer = document.createElement("div");
            buttonContainer.className = "flex items-center";

            // Main matrix button
            const button = document.createElement("button");
            button.className = [
            "matrix-button",
            "bg-gray-600",
            "text-white",
            "px-2",
            "py-1",
            "rounded",
            "shadow",
            "hover:bg-gray-500",
            "flex-1"
            ].join(" ");

            // Button text with matrix info
            button.innerHTML = `
            <div class="font-medium">${name}</div>
            <div class="text-xs text-gray-300">${matrix.size} elements</div>
            `;

            // Click handler to spawn matrix
            button.addEventListener("click", () => {
            spawnNamedMatrix(name);
            });

            // Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.className = [
            "matrix-delete-btn",
            "bg-red-600",
            "text-white",
            "rounded",
            "shadow",
            "hover:bg-red-500",
            "flex",
            "items-center",
            "justify-center"
            ].join(" ");
            deleteBtn.innerHTML = "×";
            deleteBtn.title = `Delete ${name}`;

            // Delete handler
            deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            /* if (confirm(`Delete matrix "${name}"?`)) {
                deleteNamedMatrix(name);
            } */
            deleteNamedMatrix(name);
            });

            buttonContainer.appendChild(button);
            buttonContainer.appendChild(deleteBtn);
            menuContent.prepend(buttonContainer);
            //menuContent.appendChild(buttonContainer);
        });
        }

        console.log("Matrix menu updated:", matrixNames);
    }

    // Keyboard shortcut to spawn matrices
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "m") {
        /* e.preventDefault();
        const matrixNames = Object.keys(namedMatrices);
        if (matrixNames.length === 0) {
            alert("No named matrices available");
            return;
        }

        const name = prompt(`Enter matrix name to spawn:\n\nAvailable: ${matrixNames.join(", ")}`);
        if (name && namedMatrices[name]) {
            spawnNamedMatrix(name);
        } */
        spawnNamedMatrix('re');
        }
    });

    // Initialize matrix menu
    loadMatricesFromCookies();
    updateMatrixMenu();

    function createFloatingOperationSymbol(
        x,
        y,
        isAddition = true,
        floatDown = true
    ) {
        const symbol = document.createElement("div");
        symbol.style.position = "absolute";
        const halfWidth = 32 / 2; // px, matches w-8
        symbol.style.left = x - halfWidth + "px";
        symbol.style.top = y + "px";
        if (!floatDown) symbol.style.top = y - halfWidth + "px";
        symbol.style.pointerEvents = "none";
        symbol.style.zIndex = "50";
        symbol.style.color = "white";
        symbol.style.fontSize = "2rem";
        symbol.style.opacity = "1";
        symbol.style.transition =
        "transform 1s ease-out, opacity 1s ease-out";

        if (isAddition) {
        symbol.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>`;
        } else {
        symbol.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>`;
        }

        container.appendChild(symbol);

        // Force reflow then start animation
        symbol.offsetWidth;

        // Animate floating up and fading out
        if (floatDown) {
        //float down
        symbol.style.transform = "translateY(50px) scale(1.5)";
        } else {
        //float up
        symbol.style.transform = "translateY(-50px) scale(1.5)";
        }

        symbol.style.opacity = "0";

        // Remove after animation completes
        setTimeout(() => {
        if (symbol.parentNode) {
            symbol.remove();
        }
        }, 1000);
    }

    container.addEventListener("mousedown", (e) => {
        if (e.button !== 0 || e.target !== container) return;

        // immediately hide all your UI-controls on drag start:
        uiControls.forEach((el) => el.classList.remove("visible"));

        isSelecting = true;
        //console.log("iselecting:", isSelecting);
        const crect = container.getBoundingClientRect();

        // ↓ Adjust start to container‐local, unscaled coords
        selStart.x = (e.clientX - crect.left) / zoomLevel;
        selStart.y = (e.clientY - crect.top) / zoomLevel;

        selDiv = document.createElement("div");
        selDiv.className = "select-rect";
        selDiv.style.left = selStart.x + "px";
        selDiv.style.top = selStart.y + "px";
        selDiv.style.width = "0px";
        selDiv.style.height = "0px";
        container.appendChild(selDiv);

        clearSelection();
        window.addEventListener("mousemove", updateSelectRect);
        window.addEventListener("mouseup", finishSelectRect);
    });

    function updateSelectRect(e) {
        if (!isSelecting) return;
        const crect = container.getBoundingClientRect();

        // ↓ Compute current point in container coords, dividing out zoom
        const curX = (e.clientX - crect.left) / zoomLevel;
        const curY = (e.clientY - crect.top) / zoomLevel;

        const x1 = Math.min(selStart.x, curX),
        y1 = Math.min(selStart.y, curY),
        x2 = Math.max(selStart.x, curX),
        y2 = Math.max(selStart.y, curY);

        selDiv.style.left = x1 + "px";
        selDiv.style.top = y1 + "px";
        selDiv.style.width = x2 - x1 + "px";
        selDiv.style.height = y2 - y1 + "px";
    }

    function finishSelectRect(e) {
        if (!isSelecting) return;
        isSelecting = false;
        window.removeEventListener("mousemove", updateSelectRect);
        window.removeEventListener("mouseup", finishSelectRect);

        // get the selection‐rectangle bounds
        const rectX = parseFloat(selDiv.style.left),
        rectY = parseFloat(selDiv.style.top),
        rectW = parseFloat(selDiv.style.width),
        rectH = parseFloat(selDiv.style.height);

        const selB = selDiv.getBoundingClientRect();
        selDiv.remove();
        selDiv = null;

        // 1) clear any prior inSelection flags
        container
        .querySelectorAll(".box.inSelection")
        .forEach((el) => el.classList.remove("inSelection"));

        container.querySelectorAll(".box").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (
            r.left < selB.right &&
            r.right > selB.left &&
            r.top < selB.bottom &&
            r.bottom > selB.top
        ) {
            el.classList.add("selected", "inSelection");
        }
        });
        lockArray = Array.from(
        container.querySelectorAll(".box.locked.inSelection")
        );
        //console.log("length:", lockArray.length, " size:", lockedBoxes.size);

        if (lockArray.length != lockedBoxes.size) {
        lockArray.forEach((el) => {
            el.classList.remove("inSelection"),
            el.classList.add("removeSelection");
        });
        }

        // 2) compute bounding‐box of selected boxes in container coords
        const selectedEls = Array.from(
        container.querySelectorAll(".box.selected:not(.removeSelection)")
        );
        if (selectedEls.length) {
        renderClusterLabels();
        }

        updateArrowButtons();
        //p(editCheckBox);
    }

    // 3) draggable + group‐drag (unchanged)
    let isDragging = false,
        selectedEls = [],
        initPos = [],
        delta = { x: 0, y: 0 };
    interact(".box").draggable({
        inertia: true,
        modifiers: [
        interact.modifiers.restrictRect({
            restriction: panel,
            endOnly: false,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        }),
        ],
        onstart(event) {
        // immediately hide all your UI-controls on drag start:
        uiControls.forEach((el) => el.classList.remove("visible"));
        isDragging = true;
        const t = event.target;

        let one = false;
        let lockDrag = false;
        let lockDragAll = false;
        let lockedBoxClicked = false;
        if (
            !t.classList.contains("selected") &&
            !t.classList.contains("locked")
        ) {
            clearSelection();
            t.classList.add("selected");
            one = true;
        }

        if (t.classList.contains("locked")) {
            //clearSelection();
            //t.classList.add('selected');
            lockedBoxClicked = true;
        }

        // 1) Grab only the boxes you just rectangle-selected:
        //    (we’re assuming finishSelectRect painted them with .inSelection)
        let rectSel = Array.from(
            container.querySelectorAll(".box.inSelection")
        );

        //console.log("rectSel length:", rectSel.length);
        //let noSelect = false;
        if (rectSel.length == 0) {
            rectSel = Array.from(container.querySelectorAll(".box.selected"));
            if (lockedBoxClicked) {
            clearSelection();
            //t.classList.add('selected');
            lockDrag = true;
            }
        }

        // 2) Split that into locked vs unlocked:
        const locked = rectSel.filter((el) => lockedBoxes.has(el));
        const unlocked = rectSel.filter((el) => !lockedBoxes.has(el));

        // 3) Decide which group to actually drag:
        let toDrag;
        //console.log("unlock length:", unlocked.length);
        //console.log("one:", one);
        /* if (noSelect && (unlocked.length == 1)) {
                        toDrag = unlocked;
                        //console.log('active');
                    } */
        if (unlocked.length === rectSel.length && lockedBoxClicked) {
            //console.log("unlocked active but drag changed to locked");
            clearSelection();
            //t.classList.add('selected');
            toDrag = Array.from(container.querySelectorAll(".box.locked"));
        } else if (one) {
            toDrag = unlocked;
            //console.log("one active");
        } else if (lockDrag) {
            toDrag = locked;
            //console.log("lockdrag active");
        } else if (locked.length === rectSel.length) {
            // you dragged *only* locked boxes
            toDrag = locked;
            //console.log("locked active");
        } else if (unlocked.length === rectSel.length) {
            // you dragged *only* unlocked (freshly selected) boxes
            //console.log("unlocked active");
            toDrag = unlocked;
        } else {
            // mixed → drag everything you hit
            //console.log("mixed/all active");
            toDrag = rectSel;
        }

        // 4) Build your initPos from *that* array:
        currentInit = toDrag.map((el) => ({
            el,
            x: parseFloat(el.dataset.x),
            y: parseFloat(el.dataset.y),
        }));
        

        delta = { x: 0, y: 0 };
        groupDrag = selectedEls.length > 1;
        //console.log("");
        //groupDrag = true;
        },
        onmove(event) {
        disableEdits();

        const dx = event.dx / zoomLevel,
            dy = event.dy / zoomLevel;
        delta.x += dx;
        delta.y += dy;

        currentInit.forEach((item) => {
            const nx = item.x + delta.x,
            ny = item.y + delta.y;
            item.el.style.left = nx + "px";
            item.el.style.top = ny + "px";
            item.el.dataset.x = nx;
            item.el.dataset.y = ny;
        });

        renderClusterLabels();
        },
        onend(event) {
        // drag just finished
        isDragging = false;
        saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
        },
    });

    // 4) zoom logic (updated)
    const { width: origW, height: origH } =
        container.getBoundingClientRect();

    function applyZoom() {
        // scale the visuals
        container.style.flex = "none";
        container.style.transform = `scale(${zoomLevel})`;
        // grow/shrink the raw box so its hit‐area stays constant
        container.style.width = `${origW / zoomLevel}px`;
        container.style.height = `${origH / zoomLevel}px`;

        // 2) update every count‐label so it stays constant in screen-space
        container.querySelectorAll(".sel-count-label").forEach((lbl) => {
        // we already set transformOrigin to 'center bottom' when we created it
        lbl.style.transform = `translateX(-50%) scale(${1 / zoomLevel})`;
        });

        /* container.querySelectorAll(".matrix-arrow-btn").forEach((lbl) => {
        // we already set transformOrigin to 'center bottom' when we created it
        lbl.style.transform = `translateX(-50%) scale(${1 / zoomLevel})`;
        }); */
    }

    // initialize on load
    applyZoom();

    // grab the new button
    const groupBtn = document.getElementById("group-btn");

    groupBtn.addEventListener("click", () => {
        // find all selected boxes
        const selected = Array.from(
        container.querySelectorAll(".box.selected:not(.locked)")
        );
        const n = selected.length;
        if (n === 0) return;

        // sort in‐place by that inner input’s value:
        selected.sort((a, b) => {
        const aVal =
            parseFloat(a.querySelector("input.box-input").value) || 0;
        const bVal =
            parseFloat(b.querySelector("input.box-input").value) || 0;
        return aVal - bVal;
        });

        // 1) add the transition class
        selected.forEach((el) => el.classList.add("group-transition"));

        // 2) force the browser to notice the class before we move them
        //    so the transition actually runs:
        selected[0].offsetWidth; // reflow

        // 1) compute grid dimensions
        const cols = Math.ceil(Math.sqrt(n)); // e.g. sqrt(7)=2.64→3 columns
        const rows = Math.ceil(n / cols); // fill rows of that many cols
        const GAP = 16; // same gap you used when laying out
        const SIZE = 96; // your box size

        // 2) compute the “center” of the current selection
        const sum = selected.reduce(
        (s, el) => ({
            x: s.x + parseFloat(el.dataset.x),
            y: s.y + parseFloat(el.dataset.y),
        }),
        { x: 0, y: 0 }
        );

        const centerX = sum.x / n;
        const centerY = sum.y / n;

        // 3) figure out total pixel dimensions of the new grid
        const totalW = (cols - 1) * (SIZE + GAP);
        const totalH = (rows - 1) * (SIZE + GAP);

        // 4) pick a start-point so that the grid’s center sits at (centerX, centerY)
        const startX = centerX - totalW / 2;
        const startY = centerY - totalH / 2;

        // 5) re-position each box into its [row, col] slot
        selected.forEach((el, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const x = startX + col * (SIZE + GAP);
        const y = startY + row * (SIZE + GAP);

        el.style.left = x + "px";
        el.style.top = y + "px";
        el.dataset.x = x;
        el.dataset.y = y;
        });

        // 4) after the animation duration, strip the class so future drags are instant
        setTimeout(() => {
        selected.forEach((el) => el.classList.remove("group-transition"));
        }, 300); // match the 0.3s in your CSS

        //clearSelection();
        renderClusterLabels();
        saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
    });

    // 6) **ADD SQUARE** button
    document.getElementById("add-square").addEventListener("click", () => {
        const selected = Array.from(
        container.querySelectorAll(".box.selected")
        );
        let x, y;

        if (selected.length > 0) {
        // find the SW-most selected box
        const sw = selected.reduce((best, el) => {
            const ex = parseFloat(el.dataset.x),
            ey = parseFloat(el.dataset.y);
            const bx = parseFloat(best.dataset.x),
            by = parseFloat(best.dataset.y);
            // pick the one with larger y (lower on screen),
            // and if tie, the smaller x (more to the left)
            if (ey > by || (ey === by && ex < bx)) return el;
            return best;
        }, selected[0]);

        x = parseFloat(sw.dataset.x);
        y = parseFloat(sw.dataset.y) + SIZE + GAP; // directly below
        } else {
        // fallback: top-left if nothing selected
        x = 16;
        y = 80;
        }

        createBox(x, y);
        saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
    });

    const slider = document.getElementById("zoom-slider");

    // whenever the slider moves, set zoomLevel and redraw
    slider.addEventListener("input", (e) => {
        zoomLevel = parseFloat(e.target.value);
        applyZoom();
    });

    // keep the slider in sync when + / – buttons are clicked:
    function updateSlider() {
        slider.value = zoomLevel.toFixed(2);
    }

    document.getElementById("copy-btn").addEventListener("click", () => {
        const selected = Array.from(
        container.querySelectorAll(".box.selected")
        );
        if (selected.length === 0) return;

        // find SW-most selected box
        const sw = selected.reduce((best, el) => {
        const ex = +el.dataset.x,
            ey = +el.dataset.y;
        const bx = +best.dataset.x,
            by = +best.dataset.y;
        return ey > by || (ey === by && ex < bx) ? el : best;
        }, selected[0]);

        const swX = +sw.dataset.x,
        swY = +sw.dataset.y;

        // compute each box’s offset from SW and get the input value
        const deltas = selected.map((el) => {
        const input = el.querySelector("input.box-input");
        return {
            dx: +el.dataset.x - swX,
            dy: +el.dataset.y - swY,
            val: input.value,
        };
        });

        // new group’s origin — directly below SW
        const baseX = swX,
        baseY = swY + SIZE / 2 + GAP;

        // clear old selection, then paste copies
        clearSelection();
        clearLabels();
        //repositionCountLabel();

        deltas.forEach((delta) => {
        ////console.log(delta.val);
        createBox(baseX + delta.dx, baseY + delta.dy, delta.val);
        });
        saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
    });

    document.getElementById("delete-btn").addEventListener("click", () => {
        // remove all selected boxes
        container
        .querySelectorAll(".box.selected")
        .forEach((el) => el.remove());

        clearLabels();
        // clear any selection state and count-label
        clearSelection();
        saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
    });

    document.getElementById("lock-btn").addEventListener("click", () => {
        const selected = Array.from(
        container.querySelectorAll(".box.selected")
        );
        selected.forEach((box) => {
        if (lockedBoxes.has(box)) {
            // it’s already locked → unlock it
            lockedBoxes.delete(box);
            box.classList.remove("locked");
        } else {
            // not locked yet → lock it
            lockedBoxes.add(box);
            box.classList.add("locked");
        }
        });
        clearSelection();
        ////console.log('Locked boxes count:', lockedBoxes.size);
    });

    // --- cookie helpers ---
    function setCookie(name, val, days, seconds) {
        const d = new Date();
        if (days) {
        d.setTime(d.getTime() + (days || 365) * 24 * 60 * 60 * 1000);
        } else {
        d.setTime(d.getTime() + seconds * 1000);
        }
        
        document.cookie =
        name +
        "=" +
        encodeURIComponent(val) +
        ";expires=" +
        d.toUTCString() +
        ";path=/";
    }

    function getCookie(name) {
        return document.cookie.split("; ").reduce((r, c) => {
        const [k, v] = c.split("=");
        return k === name ? decodeURIComponent(v) : r;
        }, "");
    }

    // --- tutorial toggle logic ---
    const tut = document.getElementById("tutorial");
    const toggle = document.getElementById("tutorial-toggle");

    // initialize from cookie
    const seen = getCookie("tutorialSeen");
    if (!seen) {
        // first visit → expanded
        tut.classList.add("expanded");
        toggle.textContent = "−";
    } else {
        // returning → collapsed
        tut.classList.add("collapsed");
        toggle.textContent = "+";
    }

    // when you click the toggle:
    toggle.addEventListener("click", () => {
        if (tut.classList.contains("expanded")) {
        // collapse it
        tut.classList.remove("expanded");
        tut.classList.add("collapsed");
        toggle.textContent = "+";
        setCookie("tutorialSeen", "true", 1); //1 day
        } else {
        // expand it
        tut.classList.remove("collapsed");
        tut.classList.add("expanded");
        toggle.textContent = "−";
        }
    });

    // Add this where you have your other slider code
    document.addEventListener(
        "wheel",
        function (e) {
        const updatedTut = document.getElementById("tutorial");
        const matrixMenu = document.getElementById("matrix-menu");
        //console.log(updatedTut.classList.contains("visible"));
        if (
            updatedTut.classList.contains("expanded") &&
            updatedTut.matches(".ui-control:hover") ||
            matrixMenu.matches(".ui-control:hover")
        )
            return;
        // Prevent default scrolling
        e.preventDefault();

        if (e.deltaY < 0) {
            // Scrolling up - zoom in
            zoomLevel = Math.min(1.5, zoomLevel + 0.1);
            applyZoom();
        } else {
            // Scrolling down - zoom out
            zoomLevel = Math.max(0.2, zoomLevel - 0.1);
            applyZoom();
        }
        updateSlider();
        },
        { passive: false }
    );

    // Helper to get all enabled box-inputs as an array
    function getAllBoxInputs() {
        return Array.from(
        document.querySelectorAll(".box-input:not(.disabled)")
        );
    }

    // Enable arrow key navigation between inputs
    function enableArrowNavigation() {
        getAllBoxInputs().forEach((input) => {
        input.addEventListener("keydown", function (e) {
            if (
            !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(
                e.key
            )
            )
            return;

            // Get current box position
            const box = input.closest(".box");
            const x = parseFloat(box.dataset.x);
            const y = parseFloat(box.dataset.y);

            // Find the closest input in the arrow direction
            let minDist = Infinity,
            nextInput = null;
            getAllBoxInputs().forEach((otherInput) => {
            if (otherInput === input) return;
            const otherBox = otherInput.closest(".box");
            const ox = parseFloat(otherBox.dataset.x);
            const oy = parseFloat(otherBox.dataset.y);

            // Only consider boxes in the right direction
            let valid = false,
                dist = Infinity;
            if (
                e.key === "ArrowUp" &&
                oy < y &&
                Math.abs(ox - x) < SIZE / 2
            ) {
                valid = true;
                dist = y - oy;
            }
            if (
                e.key === "ArrowDown" &&
                oy > y &&
                Math.abs(ox - x) < SIZE / 2
            ) {
                valid = true;
                dist = oy - y;
            }
            if (
                e.key === "ArrowLeft" &&
                ox < x &&
                Math.abs(oy - y) < SIZE / 2
            ) {
                valid = true;
                dist = x - ox;
            }
            if (
                e.key === "ArrowRight" &&
                ox > x &&
                Math.abs(oy - y) < SIZE / 2
            ) {
                valid = true;
                dist = ox - x;
            }
            if (valid && dist < minDist) {
                minDist = dist;
                nextInput = otherInput;
            }
            });

            if (nextInput) {
            e.preventDefault();
            nextInput.focus();
            nextInput.select();
            }
        });
        });
    }

    // Call this after boxes are created and when edit mode changes
    enableArrowNavigation();

    // Helper function to find the matrix that contains selected boxes
    function findMatrixFromSelection() {
        const selected = Array.from(container.querySelectorAll(".box.selected"));
        if (selected.length === 0) return null;

        // Use existing matrixToGrid function to structure the matrix
        const grid = matrixToGrid(selected);
        return grid.length > 0 ? grid : null;
    }

    // Helper function to spawn new row/column
    function spawnRowOrColumn(direction, grid) {
        if (!grid || grid.length === 0) return;

        const SIZE = 96;
        const GAP = 16;

        switch (direction) {
        case 'down':
            // Spawn new row below the matrix
            const bottomRow = grid[grid.length - 1];
            const newRowYBottom = bottomRow[0].y + (SIZE + GAP);

            for (let i = 0; i < bottomRow.length; i++) {
            const newX = bottomRow[i].x;
            createBox(newX, newRowYBottom, '0');
            }
            break;

        case 'right':
            // Spawn new column to the right of the matrix
            const rightmostX = Math.max(...grid.flat().map(item => item.x));
            const newColXRight = rightmostX + (SIZE + GAP);

            for (let i = 0; i < grid.length; i++) {
            const newY = grid[i][grid[i].length - 1].y;
            createBox(newColXRight, newY, '0');
            }
            break;

        case 'remove-row':
            // Remove bottom row (only if more than 1 row exists)
            if (grid.length > 1) {
            const bottomRow = grid[grid.length - 1];
            bottomRow.forEach(item => {
                // Remove the actual DOM element
                if (item.el && item.el.parentNode) {
                item.el.remove();
                }
            });
            }
            break;

        case 'remove-column':
            // Remove rightmost column (only if more than 1 column exists)
            const maxCols = Math.max(...grid.map(row => row.length));
            if (maxCols > 1) {
            grid.forEach(row => {
                // Remove the rightmost element in each row
                const rightmostItem = row[row.length - 1];
                if (rightmostItem && rightmostItem.el && rightmostItem.el.parentNode) {
                rightmostItem.el.remove();
                }
            });
            }
            break;
        }

        // Re-enable arrow navigation for newly created boxes
        setTimeout(() => {
        enableArrowNavigation();
        }, 50);
    }

    // Function to create and position arrow buttons around a matrix
    function createArrowButtons(grid) {
        if (!grid || grid.length === 0) return;

        const SIZE = 96;
        const GAP = 16;
        const BUTTON_SIZE = 24*1.5; // Smaller buttons since we have more of them

        // Calculate matrix bounds
        const allItems = grid.flat();
        const minX = Math.min(...allItems.map(item => item.x));
        const maxX = Math.max(...allItems.map(item => item.x)) + SIZE;
        const minY = Math.min(...allItems.map(item => item.y));
        const maxY = Math.max(...allItems.map(item => item.y)) + SIZE;

        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;

        // Check if we can remove rows/columns (need at least 2 to remove 1)
        const canRemoveRow = grid.length > 1;
        const canRemoveColumn = Math.max(...grid.map(row => row.length)) > 1;

        // Create buttons for each direction
        const buttons = [
        // Bottom buttons: Add row (down arrow) and Remove row (up arrow)
        {
            title: 'Add row',
            direction: 'down',
            x: centerX - BUTTON_SIZE - 5,
            y: maxY + SIZE / 3,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
    </svg>
    `
        },
        {
            title: canRemoveRow ? 'Remove row' : 'Cannot remove (min 1 row)',
            direction: 'remove-row',
            x: centerX + 5,
            y: maxY + SIZE / 3,
            disabled: !canRemoveRow,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
    </svg>
    `
        },
        // Right buttons: Add column (right arrow) and Remove column (left arrow)
        {
            title: 'Add column',
            direction: 'right',
            x: maxX + SIZE / 3,
            y: centerY - BUTTON_SIZE - 5,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
    </svg>
    `
        },
        {
            title: canRemoveColumn ? 'Remove column' : 'Cannot remove (min 1 column)',
            direction: 'remove-column',
            x: maxX + SIZE / 3,
            y: centerY + 5,
            disabled: !canRemoveColumn,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
    </svg>
    `
        }
        ];

        buttons.forEach(btnData => {
        const btn = document.createElement('button');
        btn.className = 'matrix-arrow-btn';
        btn.title = btnData.title;
        btn.style.left = `${btnData.x}px`;
        btn.style.top = `${btnData.y}px`;
        btn.innerHTML = btnData.svg;

        // Scale button with zoom level
        btn.style.transform = `scale(${1 / zoomLevel})`;
        btn.style.transformOrigin = 'center';

        // Style disabled buttons differently
        if (btnData.disabled) {
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = '#4b5563';
        }

        // Add click handler
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Don't do anything if button is disabled
            if (btnData.disabled) return;

            // Save state before making changes
            saveHistory();

            // Perform the action
            spawnRowOrColumn(btnData.direction, grid);

            // Update buttons and re-render
            updateArrowButtons();
            setTimeout(() => {
            renderClusterLabels();
            }, 100);
        });

        container.appendChild(btn);
        });
    }

    // Function to remove all arrow buttons
    function removeArrowButtons() {
        container.querySelectorAll('.matrix-arrow-btn').forEach(btn => btn.remove());
    }

    // Function to update arrow button visibility based on edit mode and selection
    function updateArrowButtons() {
        const selected = Array.from(container.querySelectorAll(".box.selected"));
        if (selected.length === 0) return;

        const matrices = clusterBoxes(selected);
        
        // Use existing matrixToGrid function to structure the matrix
        const grid = matrixToGrid(selected);

        // Always remove existing buttons first
        removeArrowButtons();

        // Only create new buttons if edit mode is enabled and there's a selected matrix
        if (editCheckBox.checked && grid && matrices.length == 1) {
        createArrowButtons(grid);
        }
    }

    // grab the checkbox and all the box-inputs
    //const toggleEdit = document.getElementById("edit-labels"); // your checkbox

    if (floatingTutorialSeen) {
        updateArrowButtons();
        //input.classList.toggle("editing", disable);
    }
    //toggleEdit.dispatchEvent(new Event("change"));
    // when the checkbox changes…
    editCheckBox.addEventListener("change", () => {
        const boxInputs = document.querySelectorAll(".box-input");
        const disable = !editCheckBox.checked; // disable when *not* checked
        boxInputs.forEach((input) => {
        input.classList.toggle("disabled", disable);
        //input.classList.toggle("flash-border", !disable);
        //input.style.fontStyle = "italic";
        //input.classList.toggle("editing", disable);
        });

        // Re-enable navigation for newly enabled inputs
        if (editCheckBox.checked) {
        enableArrowNavigation();
        }

        updateArrowButtons();
    });

    const operationButtons = [
        "inverse-btn",
        "rref-btn",
        "det-btn",
        "multiply-btn",
        "add-btn",
        "tanspose-button",
        "group-btn"
    ];

    operationButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
        btn.addEventListener("click", disableEdits);
        }
    });



    function matrixToGrid(matrix, tolerance = 10) {
        const positions = matrix.map((el) => ({
        el,
        x: parseFloat(el.dataset.x),
        y: parseFloat(el.dataset.y),
        }));

        // Group by rows
        const rowGroups = [];
        positions.forEach((pos) => {
        let foundRow = rowGroups.find(
            (row) => Math.abs(row[0].y - pos.y) <= tolerance
        );
        if (foundRow) {
            foundRow.push(pos);
        } else {
            rowGroups.push([pos]);
        }
        });

        // Sort rows by Y, and within rows by X
        rowGroups.sort((a, b) => a[0].y - b[0].y);
        rowGroups.forEach((row) => row.sort((a, b) => a.x - b.x));

        return rowGroups;
    }

    document
        .getElementById("tanspose-button")
        .addEventListener("click", () => {
        const selected = Array.from(
            container.querySelectorAll(".box.selected:not(.locked)")
        );
        const n = selected.length;
        if (n === 0) return;

        // 1) add the transition class
        selected.forEach((el) => el.classList.add("transpose-transition"));
        selected[0].offsetWidth; // reflow

        // 2) Find the actual grid structure by detecting rows and columns
        const positions = selected.map((el) => ({
            el,
            x: parseFloat(el.dataset.x),
            y: parseFloat(el.dataset.y),
        }));

        // Group by rows (similar Y coordinates)
        const tolerance = 10;
        const rowGroups = [];

        positions.forEach((pos) => {
            let foundRow = rowGroups.find(
            (row) => Math.abs(row[0].y - pos.y) <= tolerance
            );

            if (foundRow) {
            foundRow.push(pos);
            } else {
            rowGroups.push([pos]);
            }
        });

        // Sort rows by Y position, and within each row by X position
        rowGroups.sort((a, b) => a[0].y - b[0].y);
        rowGroups.forEach((row) => row.sort((a, b) => a.x - b.x));

        // 3) Determine grid dimensions
        const actualRows = rowGroups.length;
        const maxCols = Math.max(...rowGroups.map((row) => row.length));

        // 4) Create a logical grid with ghost positions
        const grid = Array(actualRows)
            .fill()
            .map(() => Array(maxCols).fill(null));

        // Fill the grid with actual elements
        rowGroups.forEach((row, rowIndex) => {
            row.forEach((pos, colIndex) => {
            grid[rowIndex][colIndex] = pos.el;
            });
        });

        // 5) compute the "center" of the current selection
        const sum = selected.reduce(
            (s, el) => ({
            x: s.x + parseFloat(el.dataset.x),
            y: s.y + parseFloat(el.dataset.y),
            }),
            { x: 0, y: 0 }
        );

        const centerX = sum.x / n;
        const centerY = sum.y / n;

        // 6) for transpose: rows become columns, columns become rows
        const newRows = maxCols;
        const newCols = actualRows;

        // 7) figure out total pixel dimensions of the transposed grid
        const GAP = 16;
        const SIZE = 96;
        const totalW = (newCols - 1) * (SIZE + GAP);
        const totalH = (newRows - 1) * (SIZE + GAP);

        // 8) pick a start-point so that the transposed grid's center sits at (centerX, centerY)
        const startX = centerX - totalW / 2;
        const startY = centerY - totalH / 2;

        // 9) NEW: Animate transpose column by column with space-making
        const COLUMN_DELAY = 500; // 500ms delay between each column

        clearLabels();

        for (let col = 0; col < maxCols; col++) {
            setTimeout(() => {
            // FIRST: Move all remaining elements down to make space
            for (
                let futureCol = col + 1;
                futureCol < maxCols;
                futureCol++
            ) {
                for (let row = 0; row < actualRows; row++) {
                const element = grid[row][futureCol];
                if (element) {
                    const currentY = parseFloat(element.dataset.y);
                    const newY = currentY + (SIZE + GAP); // Move down by one row height

                    element.style.top = newY + "px";
                    element.dataset.y = newY;
                }
                }
            }

            // SECOND: Move current column elements to their transposed positions
            for (let row = 0; row < actualRows; row++) {
                const element = grid[row][col];
                if (element) {
                // Transpose: element at (row, col) goes to (col, row)
                const newRow = col;
                const newCol = row;

                const x = startX + newCol * (SIZE + GAP);
                const y = startY + newRow * (SIZE + GAP);

                element.style.left = x + "px";
                element.style.top = y + "px";
                element.dataset.x = x;
                element.dataset.y = y;
                }
            }

            // Update cluster labels after each column move
            }, col * COLUMN_DELAY + col * COLUMN_DELAY * speedFactor);
        }

        // 10) Remove transition class after all animations complete
        const totalAnimationTime = maxCols * COLUMN_DELAY + 500; // +1000ms for final transition
        setTimeout(() => {
            selected.forEach((el) =>
            el.classList.remove("transpose-transition")
            );
            renderClusterLabels();
        }, totalAnimationTime + totalAnimationTime * speedFactor);
        saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
        });

    document.getElementById("add-btn").addEventListener("click", () => {
        const selected = Array.from(
        container.querySelectorAll(".box.selected:not(.locked)")
        );
        const n = selected.length;
        if (n === 0) return;

        const matrices = clusterBoxes(selected);

        // Need exactly 2 matrices for addition
        if (matrices.length !== 2) {
        alert("Please select exactly 2 matrices for addition");
        return;
        }

        // Sort matrices by leftmost position to determine which is first/second
        matrices.sort((a, b) => {
        const aMinX = Math.min(...a.map((el) => +el.dataset.x));
        const bMinX = Math.min(...b.map((el) => +el.dataset.x));
        return aMinX - bMinX;
        });

        const [matrix1, matrix2] = matrices;

        // Check if matrices have the same dimensions
        if (matrix1.length !== matrix2.length) {
        alert("Matrices must have the same dimensions for addition");
        return;
        }

        // Convert each matrix to a 2D grid structure for proper alignment
        

        const grid1 = matrixToGrid(matrix1);
        const grid2 = matrixToGrid(matrix2);

        // Verify same grid structure
        if (
        grid1.length !== grid2.length ||
        grid1.some((row, i) => row.length !== grid2[i].length)
        ) {
        alert("Matrices must have the same dimensions for addition");
        return;
        }

        // Remove count labels during animation
        clearLabels();

        // Create a flat array of pairs for sequential animation
        const pairs = [];
        grid1.forEach((row, rowIndex) => {
        row.forEach((pos, colIndex) => {
            pairs.push({
            left: pos.el,
            right: grid2[rowIndex][colIndex].el,
            leftOriginalX: parseFloat(pos.el.dataset.x),
            leftOriginalY: parseFloat(pos.el.dataset.y),
            rightOriginalX: parseFloat(
                grid2[rowIndex][colIndex].el.dataset.x
            ),
            rightOriginalY: parseFloat(
                grid2[rowIndex][colIndex].el.dataset.y
            ),
            });
        });
        });

        let currentPairIndex = 0;
        //const ANIMATION_DELAY = 600; // Time between each pair animation

        function animateNextPair() {
        if (currentPairIndex >= pairs.length) {
            // All animations complete, update cluster labels
            renderClusterLabels();
            return;
        }

        const pair = pairs[currentPairIndex];
        const {
            left,
            right,
            leftOriginalX,
            leftOriginalY,
            rightOriginalX,
            rightOriginalY,
        } = pair;

        // Add transition classes
        left.classList.add("group-transition");
        right.classList.add("group-transition");

        // Force reflow
        left.offsetWidth;

        // Step 1: Move both blocks up by SIZE + GAP
        const upwardY = leftOriginalY - (SIZE + GAP);
        left.style.left = leftOriginalX + "px";
        left.style.top = upwardY + "px";
        left.dataset.x = leftOriginalX;
        left.dataset.y = upwardY;

        right.style.left = rightOriginalX + "px";
        right.style.top = upwardY + "px";
        right.dataset.x = rightOriginalX;
        right.dataset.y = upwardY;

        // Step 2: After upward movement, move right block to left block position
        setTimeout(() => {
            right.style.left = leftOriginalX + "px";
            right.style.top = upwardY + "px";
            right.dataset.x = leftOriginalX;
            right.dataset.y = upwardY;

            // Step 3: After horizontal movement, combine values and remove right block
            // (blocks stay at the elevated position)
            setTimeout(() => {
            // Get input values
            const input1 = left.querySelector("input.box-input");
            const input2 = right.querySelector("input.box-input");

            // Parse values (default to 0 if not a number)
            const val1 = parseFloat(input1.value) || 0;
            const val2 = parseFloat(input2.value) || 0;

            // Update left block with the sum
            input1.value = val1 + val2;
            
            adjustBoxInput(input1);
            // Show floating addition symbol
            const symbolX = parseFloat(left.dataset.x) + SIZE / 2;
            const symbolY = parseFloat(left.dataset.y) + SIZE;
            createFloatingOperationSymbol(symbolX, symbolY, true, true); // true for addition

            // Remove right block and transition classes
            right.remove();
            left.classList.remove("group-transition");

            // Move to next pair
            currentPairIndex++;
            animateNextPair();
            }, 300 + 300 * speedFactor); // Wait for horizontal movement
        }, 300 + 300 * speedFactor); // Wait for upward movement
        }

        // Start the animation sequence
        animateNextPair();
        saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
    });

    // Helper function to create a copy of an element
    function createCopyOfElement(originalEl, x, y) {
        const copy = document.createElement("div");
        copy.className = originalEl.className;
        copy.style.left = x + "px";
        copy.style.top = y + "px";
        copy.dataset.x = x;
        copy.dataset.y = y;

        const originalInput = originalEl.querySelector("input.box-input");
        const copyInput = document.createElement("input");
        copyInput.type = "text";
        copyInput.value = originalInput.value;
        adjustBoxInput(copyInput);
        copyInput.className = "box-input";
        copy.appendChild(copyInput);

        container.appendChild(copy);
        return copy;
    }

    async function scalarMultiplyMatrix(grid,  targetX, targetY, scalar, sign = 1) {
        clearLabels();

        const scalarElement = scalar;
        scalar = parseFloat(scalar.querySelector("input.box-input").value);
        // Remove any existing transition classes and set up for fade-in only
        scalarElement.classList.add("group-transition");

        // Force reflow
        scalarElement.offsetHeight;

        // Move scalar to first element and combine
        scalarElement.style.left = targetX + "px";
        scalarElement.style.top = targetY + "px";

        await sleep(500 + 500 * speedFactor);

        scalarElement.style.left = (targetX + sign * SIZEGAP) + "px";

        await sleep(300 + 300 * speedFactor);

        // Fade out and multiply all elements
        scalarElement.style.transition = "opacity 0.3s ease";
        scalarElement.style.opacity = "0";

        grid.forEach(colElements => {
        colElements.forEach(pos => {
            const input = pos.el.querySelector("input.box-input");
            const currentValue = parseFloat(input.value) || 0;
            input.value = (currentValue * scalar).toString();
            adjustBoxInput(input);

            // Show multiplication symbol
            const symbolX = parseFloat(pos.el.dataset.x) + SIZE / 2;
            const symbolY = parseFloat(pos.el.dataset.y);
            createFloatingOperationSymbol(symbolX, symbolY, false, false);
        });
        });
        

        await sleep(300 + 300 * speedFactor);
        scalarElement.remove();

        renderClusterLabels();
        saveHistory();
        //await waitForSpace();
    }

    document
        .getElementById("multiply-btn")
        .addEventListener("click", () => {
        const selected = Array.from(
            container.querySelectorAll(".box.selected:not(.locked)")
        );
        const n = selected.length;
        if (n === 0) return;

        const matrices = clusterBoxes(selected);

        // Need exactly 2 matrices for multiplication
        if (matrices.length !== 2) {
            alert("Please select exactly 2 matrices for multiplication");
            return;
        }

        // Sort matrices by leftmost position to determine which is first/second
        matrices.sort((a, b) => {
            const aMinX = Math.min(...a.map((el) => +el.dataset.x));
            const bMinX = Math.min(...b.map((el) => +el.dataset.x));
            return aMinX - bMinX;
        });

        const [leftMatrix, rightMatrix] = matrices;

        const leftGrid = matrixToGrid(leftMatrix);
        const rightGrid = matrixToGrid(rightMatrix);

        // Verify matrices can be multiplied (left columns = right rows)
        const leftRows = leftGrid.length;
        const leftCols = leftGrid[0]?.length || 0;
        const rightRows = rightGrid.length;
        const rightCols = rightGrid[0]?.length || 0;

        let leftDim = leftRows * leftCols;
        let rightDim = rightRows * rightCols;

        if (leftDim == 1) {
            let rightTop = rightGrid[0][0].el;
            let rightBottom = rightGrid[rightRows - 1][0].el;
            let matrixHeight = (rightBottom.dataset.y - rightTop.dataset.y) / 2;

            let targetX = rightTop.dataset.x - SIZEGAP * 2;
            let targetY = parseFloat(rightTop.dataset.y) + matrixHeight;

            scalarMultiplyMatrix(rightGrid, targetX, targetY, leftGrid[0][0].el);
        
            return;

        } else if (rightDim == 1) {
            let leftTop = leftGrid[0][leftCols - 1].el;
            let leftBottom = leftGrid[leftRows - 1][0].el;
            let matrixHeight = (leftBottom.dataset.y - leftTop.dataset.y) / 2;

            let targetX = parseFloat(leftTop.dataset.x) + SIZEGAP * 2;
            let targetY = parseFloat(leftTop.dataset.y) + matrixHeight;
            console.log(targetX, targetY);
            scalarMultiplyMatrix(leftGrid, targetX, targetY, rightGrid[0][0].el, -1);
            return;
        }

        if (leftCols !== rightRows) {
            alert(
            `Cannot multiply matrices: left matrix has ${leftCols} columns but right matrix has ${rightRows} rows`
            );
            return;
        }

        // Remove count labels during animation
        clearLabels();

        // Helper function to reset opacity for a column
        function resetColumnOpacity(colIndex) {
            for (let rowIndex = 0; rowIndex < rightRows; rowIndex++) {
            const element = rightGrid[rowIndex][colIndex].el;
            element.style.opacity = "1";
            }
        }

        // Helper function to reset opacity for a row
        function resetRowOpacity(rowIndex) {
            for (let colIndex = 0; colIndex < leftCols; colIndex++) {
            const element = leftGrid[rowIndex][colIndex].el;
            element.style.opacity = "1";
            }
        }

        // Helper function to lower opacity for a row
        function lowerRowOpacity(rowIndex) {
            for (let colIndex = 0; colIndex < leftCols; colIndex++) {
            const element = leftGrid[rowIndex][colIndex].el;
            element.style.opacity = "0.3";
            }
        }

        function resetLeftRowOpacity(rowIndex) {
            for (let colIndex = 0; colIndex < leftCols; colIndex++) {
            const element = leftGrid[rowIndex][colIndex].el;
            element.style.opacity = "1";
            }
        }

        function moveMatrix(leftMatrix, rightMatrix = [], moveDown = true) {
            let sign = 1;
            if (!moveDown) sign = -1;

            leftMatrix.forEach((el) => {
            el.classList.add("group-transition");
            const currentY = parseFloat(el.dataset.y);
            const newY = currentY + sign * (SIZE + GAP);
            el.style.top = newY + "px";
            el.dataset.y = newY;
            });

            rightMatrix.forEach((el) => {
            el.classList.add("group-transition");
            const currentY = parseFloat(el.dataset.y);
            const newY = currentY + sign * (SIZE + GAP);
            el.style.top = newY + "px";
            el.dataset.y = newY;
            });

            // Remove transition classes after animation
            setTimeout(() => {
            leftMatrix.forEach((el) => {
                el.classList.remove("group-transition");
            });
            rightMatrix.forEach((el) => {
                el.classList.remove("group-transition");
            });
            }, 300);
        }

        // Create result matrix positions (leftRows x rightCols)
        const leftTopLeft = {
            x: Math.min(...leftMatrix.map((el) => +el.dataset.x)),
            y: Math.min(...leftMatrix.map((el) => +el.dataset.y)),
        };

        let currentResultRow = 0;
        let currentResultCol = 0;

        moveMatrix(leftMatrix, rightMatrix);

        function animateNextDotProduct() {
            if (currentResultRow >= leftRows) {
            // All dot products complete, reset all opacities and update cluster labels
            // Reset all left matrix opacities
            for (let row = 0; row < leftRows; row++) {
                resetRowOpacity(row);
            }
            // Reset all right matrix opacities
            for (let col = 0; col < rightCols; col++) {
                resetColumnOpacity(col);
            }

            moveMatrix(leftMatrix, rightMatrix, false);
            renderClusterLabels();
            saveHistory(); //SAVE MATRIX HISTORY FOR UNDO*****************
            return;
            }

            if (currentResultCol >= rightCols) {
            // Row completed - move both left and right matrices down
            if (currentResultRow < leftRows - 1) {
                // Don't move after the last row
                moveMatrix(leftMatrix, rightMatrix);
            }

            // Lower opacity for the completed row
            lowerRowOpacity(currentResultRow);

            // Reset opacity for ALL columns of the right matrix when moving to next row
            for (let col = 0; col < rightCols; col++) {
                resetColumnOpacity(col);
            }

            // Move to next row
            currentResultRow++;
            currentResultCol = 0;
            //console.log("NEXT ROW");
            setTimeout(animateNextDotProduct, 400 + 400 * speedFactor);
            return;
            }

            // Starting a new column - reset opacity for the current left row
            // (so the row can be processed again with the new column)
            resetLeftRowOpacity(currentResultRow);

            // Calculate final result position for this dot product
            const finalResultX =
            leftTopLeft.x + currentResultCol * (SIZE + GAP);
            const finalResultY =
            leftTopLeft.y +
            currentResultRow * (SIZE + GAP) -
            (SIZE + GAP) * 2;

            // Arrays to store the intermediate multiplication results
            const multiplicationResults = [];
            let elementPairIndex = 0;

            function animateNextMultiplication() {
            if (elementPairIndex >= leftCols) {
                // All multiplications for this dot product are done
                // Now combine the results into one final block
                combineMultiplicationResults();
                //console.log("COMBINE");
                return;
            }

            const leftElement =
                leftGrid[currentResultRow][elementPairIndex].el;
            //console.log("left:", currentResultRow, elementPairIndex);
            const rightElement =
                rightGrid[elementPairIndex][currentResultCol].el;
            //console.log("right:", elementPairIndex, currentResultCol);
            //console.log(" ");

            // Create copies of both elements
            const leftCopy = createCopyOfElement(
                leftElement,
                parseFloat(leftElement.dataset.x),
                parseFloat(leftElement.dataset.y)
            );
            const rightCopy = createCopyOfElement(
                rightElement,
                parseFloat(rightElement.dataset.x),
                parseFloat(rightElement.dataset.y)
            );

            // Add transition classes
            leftCopy.classList.add("group-transition");
            rightCopy.classList.add("group-transition");

            // Force reflow
            leftCopy.offsetWidth;

            // Find the y of the top row of the left matrix
            const topRowY = leftMatrix[0].dataset.y;
            const upwardY = topRowY - (SIZE + GAP * 2);

            leftCopy.style.top = upwardY + "px";
            leftCopy.dataset.y = upwardY;

            rightCopy.style.top = upwardY + "px";
            rightCopy.dataset.y = upwardY;

            // Step 2: Move right copy to left copy position
            setTimeout(() => {
                rightCopy.style.left = leftCopy.dataset.x + "px";
                rightCopy.dataset.x = leftCopy.dataset.x;

                // Step 3: Perform multiplication
                setTimeout(() => {
                const leftInput = leftCopy.querySelector("input.box-input");
                const rightInput =
                    rightCopy.querySelector("input.box-input");

                const leftVal = parseFloat(leftInput.value) || 0;
                const rightVal = parseFloat(rightInput.value) || 0;
                const product = leftVal * rightVal;

                // Update left copy with the product and position it for intermediate result
                leftInput.value = product;
                adjustBoxInput(leftInput);

                // Show floating multiplication symbol
                const symbolX = parseFloat(leftCopy.dataset.x) + SIZE / 2;
                const symbolY = parseFloat(leftCopy.dataset.y);
                createFloatingOperationSymbol(
                    symbolX,
                    symbolY,
                    false,
                    false
                ); // false for multiplication

                // Lower opacity of the original elements after copying
                rightElement.style.opacity = "0.3";
                leftElement.style.opacity = "0.3";

                // Remove right copy and store left copy as intermediate result
                rightCopy.remove();
                multiplicationResults.push(leftCopy);

                // Remove transition classes
                leftCopy.classList.remove("group-transition");

                // Move to next multiplication
                elementPairIndex++;
                setTimeout(animateNextMultiplication, 300);
                }, 300 + 300 * speedFactor);
            }, 300 + 300 * speedFactor);
            }

            function combineMultiplicationResults() {
            if (multiplicationResults.length === 0) return;

            // Move all intermediate results to final position and add them up
            let finalSum = 0;
            const finalResultElement = multiplicationResults[0];

            // Calculate the sum
            multiplicationResults.forEach((resultEl) => {
                const input = resultEl.querySelector("input.box-input");
                finalSum += parseFloat(input.value) || 0;
            });

            // Animate all results moving to final position
            multiplicationResults.forEach((resultEl, index) => {
                resultEl.classList.add("group-transition");

                setTimeout(() => {
                resultEl.style.left = finalResultX + "px";
                resultEl.style.top = finalResultY + "px";
                resultEl.dataset.x = finalResultX;
                resultEl.dataset.y = finalResultY;

                setTimeout(() => {
                    if (index === 0) {
                    // First element becomes the final result
                    const input = resultEl.querySelector("input.box-input");
                    input.value = finalSum;
                    adjustBoxInput(input);

                    // Show floating addition symbol when combining results (only if more than 1 result)
                    if (multiplicationResults.length > 1) {
                        const symbolX =
                        parseFloat(resultEl.dataset.x) + SIZE / 2;
                        const symbolY = parseFloat(resultEl.dataset.y) + SIZE;
                        createFloatingOperationSymbol(
                        symbolX,
                        symbolY,
                        true,
                        true
                        ); // true for addition
                    }

                    resultEl.classList.remove("group-transition");
                    } else {
                    // Remove other elements
                    resultEl.remove();
                    }

                    // If this was the last element, move to next dot product
                    if (index === multiplicationResults.length - 1) {
                    currentResultCol++;
                    setTimeout(animateNextDotProduct, 300 + 300 * speedFactor);
                    }
                }, 300 + 300 * speedFactor);
                }, index * 100 + index * 100 * speedFactor); // Stagger the movement slightly
            });
            }

            // Start the multiplication sequence for this dot product
            animateNextMultiplication();
        }

        // Start the animation sequence
        animateNextDotProduct();
        });

    let speedFactor = 0;
    // Animation speed slider logic
    const speedSlider = document.getElementById("speed-slider");
    if (speedSlider) {
        // Set initial value
        speedSlider.value = speedFactor;

        // Listen for slider changes
        speedSlider.addEventListener("input", (e) => {
        speedFactor = parseFloat(e.target.value) * -1;

        // Find the stylesheet (assumes your style is in the first stylesheet)
        const sheet = document.styleSheets[0];
        for (let rule of sheet.cssRules) {
            if (rule.selectorText === '.group-transition') {
            rule.style.transition = `left ${0.3 + 0.3*speedFactor}s ease, top ${0.3 + 0.3 * speedFactor}s ease`;
            }
            if (rule.selectorText === '.transpose-transition') {
            rule.style.transition = `left ${1 + 1 * speedFactor}s ease, top ${1 + 1 * speedFactor}s ease`;
            }
        }
        });
    }

    document.getElementById("det-btn").addEventListener("click", () => {
        const selected = Array.from(
        container.querySelectorAll(".box.selected:not(.locked)")
        );
        const n = selected.length;
        if (n === 0) return;

        const matrices = clusterBoxes(selected);

        // Need exactly 1 matrix for determinant
        if (matrices.length !== 1) {
        alert("Please select exactly 1 matrix for determinant calculation");
        return;
        }

        const matrix = matrices[0];

        const grid = matrixToGrid(matrix);
        const rows = grid.length;
        const cols = grid[0]?.length || 0;
        let is2x2 = false;

        // Verify square matrix
        if (rows !== cols) {
        alert("Determinant can only be calculated for square matrices");
        return;

        } else {
        if (rows === 2) is2x2 = true;
        }

        // Must be at least 2x2
        if (rows < 2) {
        alert("Matrix must be at least 2x2 for determinant calculation");
        return;
        }

        // Remove count labels during animation
        clearLabels();

        // Helper function to move matrix down
        function moveMatrixDown(matrixElements, distance = SIZE + GAP) {
        matrixElements.forEach((el) => {
            el.classList.add("group-transition");
            const currentY = parseFloat(el.dataset.y);
            const newY = currentY + distance;
            el.style.top = newY + "px";
            el.dataset.y = newY;
        });

        // Remove transition classes after animation
        setTimeout(() => {
            matrixElements.forEach((el) => {
            el.classList.remove("group-transition");
            });
        }, 300);
        }

        // Helper function to move matrix right
        function moveMatrixRight(
        matrixElements,
        distance = (cols + 1) * (SIZE + GAP)
        ) {
        matrixElements.forEach((el) => {
            el.classList.add("group-transition");
            const currentX = parseFloat(el.dataset.x);
            const newX = currentX + distance;
            el.style.left = newX + "px";
            el.dataset.x = newX;
        });

        // Remove transition classes after animation
        setTimeout(() => {
            matrixElements.forEach((el) => {
            el.classList.remove("group-transition");
            });
        }, 300);
        }

        // Find row/column with most zeros
        function findBestRowOrColumn() {
        let bestRow = -1,
            bestCol = -1;
        let maxZeros = -1;
        let isRow = true;

        // Check rows
        for (let i = 0; i < rows; i++) {
            let zeroCount = 0;
            for (let j = 0; j < cols; j++) {
            const value =
                parseFloat(
                grid[i][j].el.querySelector("input.box-input").value
                ) || 0;
            if (value === 0) zeroCount++;
            }
            if (zeroCount > maxZeros) {
            maxZeros = zeroCount;
            bestRow = i;
            isRow = true;
            }
        }

        // Check columns
        for (let j = 0; j < cols; j++) {
            let zeroCount = 0;
            for (let i = 0; i < rows; i++) {
            const value =
                parseFloat(
                grid[i][j].el.querySelector("input.box-input").value
                ) || 0;
            if (value === 0) zeroCount++;
            }
            if (zeroCount > maxZeros) {
            maxZeros = zeroCount;
            bestCol = j;
            isRow = false;
            }
        }

        return { isRow, index: isRow ? bestRow : bestCol };
        }

        // Get minor matrix (excluding specific row and column)
        function getMinorMatrix(excludeRow, excludeCol) {
        const minorElements = [];
        for (let i = 0; i < rows; i++) {
            if (i === excludeRow) continue;
            for (let j = 0; j < cols; j++) {
            if (j === excludeCol) continue;
            minorElements.push(grid[i][j].el);
            }
        }
        return minorElements;
        }

        // Fade out and remove the original 2x2 matrix elements
        function fadeOutAndRemove(elements) {
        elements.forEach(el => {
            el.style.transition = "opacity 0.4s";
            el.style.opacity = "0";
        });
        setTimeout(() => {
            elements.forEach(el => el.remove());
        }, 400); // Match the transition duration
        }

        // Calculate 2x2 determinant with animation
        function calculate2x2Determinant(
        matrix2x2,
        signedElement,
        onComplete
        ) {
        const grid2x2 = matrixToGrid(matrix2x2);

        // Create copies of the 2x2 matrix
        const copies = [];
        const originalTopLeft = {
            x: Math.min(...matrix2x2.map((el) => parseFloat(el.dataset.x))),
            y: Math.min(...matrix2x2.map((el) => parseFloat(el.dataset.y))),
        };
        const originalBottomRight = {
            x: Math.max(...matrix2x2.map((el) => parseFloat(el.dataset.x))),
            y: Math.max(...matrix2x2.map((el) => parseFloat(el.dataset.y))),
        };

        // Move copies down
        const copyY = originalBottomRight.y + (SIZE + GAP) * 2;

        matrix2x2.forEach((el, index) => {
            const originalX = parseFloat(el.dataset.x);
            const originalY = parseFloat(el.dataset.y);
            const copy = createCopyOfElement(
            el,
            originalX,
            originalY
            //copyY + (originalBottomRight.y - originalY)
            );
            copies.push(copy);
            el.style.opacity = "0.3";
        });

        copies.forEach((copy) => copy.classList.add("group-transition"));

        setTimeout(() => {
            copies.forEach((copy) => {
            const originalY = parseFloat(copy.dataset.y);
            /* const offsetY = originalY - originalBottomRight;
                const newY = copyY + offsetY; */
            const newY = copyY + (originalBottomRight.y - originalY);
            copy.style.top = newY + "px";
            copy.dataset.y = newY;
            });

        }, 10);


        // Animate moving copies down
        setTimeout(() => {
            copies.forEach((copy) =>
            copy.classList.remove("group-transition")
            );
            const copyGrid = matrixToGrid(copies);

            // Get the four elements: top-left, top-right, bottom-left, bottom-right
            const topLeft = copyGrid[0][0].el;
            const topRight = copyGrid[0][1].el;
            const bottomLeft = copyGrid[1][0].el;
            const bottomRight = copyGrid[1][1].el;

            // Step 1: Move bottom-right to top-left position
            bottomRight.classList.add("group-transition");
            const tlX = parseFloat(topLeft.dataset.x);
            const tlY = parseFloat(topLeft.dataset.y);

            bottomRight.style.left = tlX + "px";
            bottomRight.style.top = tlY + "px";
            bottomRight.dataset.x = tlX;
            bottomRight.dataset.y = tlY;

            setTimeout(() => {
            // Multiply bottom-right with top-left
            const tlInput = topLeft.querySelector("input.box-input");
            const brInput = bottomRight.querySelector("input.box-input");
            const tlVal = parseFloat(tlInput.value) || 0;
            const brVal = parseFloat(brInput.value) || 0;
            const product1 = tlVal * brVal;

            // Show multiplication symbol
            const symbolX = parseFloat(bottomRight.style.left) + SIZE / 2;
            const symbolY = parseFloat(bottomRight.style.top);
            createFloatingOperationSymbol(symbolX, symbolY, false, false);

            tlInput.value = product1;
            adjustBoxInput(tlInput);
            topLeft.remove();
            bottomRight.classList.remove("group-transition");

            // Step 2: Move bottom-left to top-right position
            setTimeout(() => {
                bottomLeft.classList.add("group-transition");
                const trX = parseFloat(topRight.dataset.x);
                const trY = parseFloat(topRight.dataset.y);

                bottomLeft.style.left = trX + "px";
                bottomLeft.style.top = trY + "px";
                bottomLeft.dataset.x = trX;
                bottomLeft.dataset.y = trY;

                setTimeout(() => {
                // Multiply bottom-left with top-right
                const trInput = topRight.querySelector("input.box-input");
                const blInput = bottomLeft.querySelector("input.box-input");
                const trVal = parseFloat(trInput.value) || 0;
                const blVal = parseFloat(blInput.value) || 0;
                const product2 = trVal * blVal;

                // Show multiplication symbol
                const symbolX2 =
                    parseFloat(bottomLeft.dataset.x) + SIZE / 2;
                const symbolY2 = parseFloat(bottomLeft.dataset.y);
                createFloatingOperationSymbol(
                    symbolX2,
                    symbolY2,
                    false,
                    false
                );

                blInput.value = product2;
                adjustBoxInput(blInput);
                topRight.remove();
                bottomLeft.classList.remove("group-transition");

                // Step 3: Subtract (move right block into left block)
                setTimeout(() => {
                    // Make product2 negative for subtraction
                    blInput.value = -product2;
                    adjustBoxInput(blInput);

                    // Move bottomLeft (right block) to bottomRight (left block) position
                    bottomLeft.classList.add("group-transition");
                    bottomLeft.style.left =
                    parseFloat(bottomRight.dataset.x) + "px";
                    bottomLeft.style.top =
                    parseFloat(bottomRight.dataset.y) + "px";
                    bottomLeft.dataset.x = parseFloat(bottomRight.dataset.x);
                    bottomLeft.dataset.y = parseFloat(bottomRight.dataset.y);

                    setTimeout(() => {
                    // Perform subtraction (addition with negative)
                    const result = -product1 + product2;
                    const brInputFinal =
                        bottomRight.querySelector("input.box-input");
                    brInputFinal.value = result;
                    adjustBoxInput(brInputFinal);

                    // Show addition symbol
                    const symbolX3 =
                        parseFloat(bottomRight.dataset.x) + SIZE / 2;
                    const symbolY3 =
                        parseFloat(bottomRight.dataset.y) + SIZE;
                    createFloatingOperationSymbol(
                        symbolX3,
                        symbolY3,
                        true,
                        true
                    );

                    bottomLeft.remove();
                    bottomRight.classList.remove("group-transition");

                    // Now multiply with the signed element (commented out for now)
                    setTimeout(() => {
                        const signedInput =
                        signedElement.querySelector("input.box-input");
                        const signedVal = parseFloat(signedInput.value) || 0;
                        const finalResult = signedVal * result;

                        // Move signed element to result position
                        bottomRight.classList.add("group-transition");
                        bottomRight.style.left =
                        parseFloat(signedElement.dataset.x) + SIZEGAP + "px";
                        bottomRight.style.top =
                        parseFloat(signedElement.dataset.y) + "px";
                        bottomRight.dataset.x = parseFloat(
                        signedElement.dataset.x
                        );
                        bottomRight.dataset.y = parseFloat(
                        signedElement.dataset.y
                        );

                        setTimeout(() => {
                        // Move signed element to result position
                        signedElement.classList.add("group-transition");
                        signedElement.offsetWidth; // Force reflow

                        setTimeout(() => {
                            signedElement.style.left = bottomRight.style.left;
                            signedElement.style.top = bottomRight.style.top;
                            signedElement.dataset.x = bottomRight.dataset.x;
                            signedElement.dataset.y = bottomRight.dataset.y;
                        }, 10);
                        

                        setTimeout(() => {
                            // Show multiplication symbol
                            const symbolX4 =
                            parseFloat(bottomRight.style.left) + SIZE / 2;
                            const symbolY4 = parseFloat(
                            bottomRight.style.top
                            );
                            createFloatingOperationSymbol(
                            symbolX4,
                            symbolY4,
                            false,
                            false
                            );

                            signedInput.value = finalResult;
                            adjustBoxInput(signedInput);

                            bottomRight.classList.remove("group-transition");
                            bottomRight.remove();

                            fadeOutAndRemove(matrix2x2);

                            onComplete();
                        }, 300 + 300*speedFactor);
                        }, 300 + 300 * speedFactor);
                    }, 300 + 300 * speedFactor);
                    //onComplete();
                    }, 300 + 300 * speedFactor);
                }, 300 + 300 * speedFactor);
                }, 300 + 300 * speedFactor);
            }, 300 + 300 * speedFactor);
            }, 300 + 300 * speedFactor);
        }, 300 + 300 * speedFactor);
        }

        // Main determinant expansion function
        function expandDeterminant() {
        const { isRow, index } = findBestRowOrColumn();
        //console.log(`Expanding along ${isRow ? "row" : "column"} ${index}`);

        let currentExpansionIndex = 0;
        const expansionElements = [];

        // Get elements to expand
        if (isRow) {
            for (let j = 0; j < cols; j++) {
            const value =
                parseFloat(
                grid[index][j].el.querySelector("input.box-input").value
                ) || 0;
            if (true /* value !== 0 */) {
                expansionElements.push({
                element: grid[index][j].el,
                row: index,
                col: j,
                });
            }
            }
        } else {
            for (let i = 0; i < rows; i++) {
            const value =
                parseFloat(
                grid[i][index].el.querySelector("input.box-input").value
                ) || 0;
            if (true /* value !== 0 */) {
                expansionElements.push({
                element: grid[i][index].el,
                row: i,
                col: index,
                });
            }
            }
        }

        function lowerAdjacentOpacity(excludeRow, excludeCol) {
            // Lower opacity for the excluded row (except the signed element)
            for (let j = 0; j < cols; j++) {
            if (j !== excludeCol) {
                const element = grid[excludeRow][j].el;
                element.style.opacity = "0.3";
            }
            }

            // Lower opacity for the excluded column (except the signed element)
            for (let i = 0; i < rows; i++) {
            if (i !== excludeRow) {
                const element = grid[i][excludeCol].el;
                element.style.opacity = "0.3";
            }
            }
        }

        function resetAllMatrixOpacity() {
            for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const element = grid[i][j].el;
                element.style.opacity = "1";
            }
            }
        }
        let signedElArray = [];

        function expandNextElement() {
            /* if (is2x2) {
            calculate2x2Determinant(
                minorCopies,
                signedElementCopy
            )

            } */

            if (currentExpansionIndex >= expansionElements.length) {
            //console.log("All expansions complete");
            // Reset all matrix opacity at the end
            resetAllMatrixOpacity();
            return;
            }

            const expansion = expansionElements[currentExpansionIndex];
            const { element, row, col } = expansion;

            // Calculate sign based on position
            const sign = (row + col) % 2 === 0 ? 1 : -1;

            // Lower opacity for adjacent row and column (everything that wasn't copied)
            

            // Create copy of the expansion element at original position first
            let signedElementCopy = createCopyOfElement(
            element,
            parseFloat(element.dataset.x),
            parseFloat(element.dataset.y)
            );
            signedElArray.push(signedElementCopy);

            
            // Get minor matrix
            let minorElements = [];
            if (is2x2) {
            let ghostBlock = document.createElement("div");
            container.appendChild(ghostBlock);
            minorElements = getMinorMatrix();
            } else {
            lowerAdjacentOpacity(row, col);
            minorElements = getMinorMatrix(row, col);
            }

            // Apply sign to the copy
            const signedInput =
            signedElementCopy.querySelector("input.box-input");
            const originalValue = parseFloat(signedInput.value) || 0;
            signedInput.value = sign * originalValue;
            adjustBoxInput(signedInput);

            // Create copies of minor matrix elements at their original positions
            const minorCopies = [];
            const matrixBottomY = Math.max(
            ...matrix.map((el) => parseFloat(el.dataset.y))
            );

            minorElements.forEach((el) => {
            const originalX = parseFloat(el.dataset.x);
            const originalY = parseFloat(el.dataset.y);

            const copy = createCopyOfElement(el, originalX, originalY);
            minorCopies.push(copy);
            });

            // Add transition classes to all copies
            signedElementCopy.classList.add("group-transition");
            minorCopies.forEach((copy) =>
            copy.classList.add("group-transition")
            );

            // Force reflow
            signedElementCopy.offsetWidth;

            // Calculate target Y position (below the main matrix)
            
            const targetY = matrixBottomY + SIZEGAP * 4;

            // Animate signed element down
            setTimeout(() => {
            //signedElementCopy.style.top = targetY + "px";
            //signedElementCopy.dataset.y = targetY;
            minorCopies.push(signedElementCopy);
            // Animate minor copies down, maintaining their relative positions
            minorCopies.forEach((copy) => {
                const originalY = parseFloat(copy.dataset.y);
                const offsetY = originalY - matrixBottomY;
                const newY = targetY + offsetY;

                copy.style.top = newY + "px";
                copy.dataset.y = newY;
            });
            minorCopies.pop();

            // Remove transition classes after animation
            setTimeout(() => {
                signedElementCopy.classList.remove("group-transition");
                minorCopies.forEach((copy) =>
                copy.classList.remove("group-transition")
                );

                // If minor is 2x2, calculate determinant
                if (minorCopies.length === 4) {
                setTimeout(() => {
                    calculate2x2Determinant(
                    minorCopies,
                    signedElementCopy,
                    () => {
                        // Move original matrix to the right for next expansion
                        setTimeout(() => {
                        const expansionElsLast = expansionElements.length - 1;
                        if (
                            currentExpansionIndex <
                            expansionElsLast && !is2x2
                        ) {
                            resetAllMatrixOpacity();
                            moveMatrixRight(matrix);
                            setTimeout(() => {
                            currentExpansionIndex++;
                            expandNextElement();
                            }, 400 + 400*speedFactor);
                        } else if (is2x2) {
                            
                        } else {
                            resetAllMatrixOpacity();
                            //console.log("Determinant expansion complete");

                            const lastEl = signedElArray[expansionElsLast];
                            let elcount = 0;
                            let elSum = 0;

                            // Calculate the target position for the final result
                            const matrixTopLeft = {
                            x: Math.min(...matrix.map(el => parseFloat(el.dataset.x))),
                            y: Math.min(...matrix.map(el => parseFloat(el.dataset.y)))
                            };
                            const matrixBottomRight = {
                            x: Math.max(...matrix.map(el => parseFloat(el.dataset.x))),
                            y: Math.max(...matrix.map(el => parseFloat(el.dataset.y)))
                            };

                            const matrixHeight = matrixBottomRight.y - matrixTopLeft.y + SIZE;
                            const finalResultX = matrixBottomRight.x + 3 * SIZEGAP;
                            const finalResultY = matrixTopLeft.y + (matrixHeight / 2) - (SIZE / 2);

                            // Create the determinant lines and equals sign
                            // ...existing code...
                            let svgArray = [];
                            function createDeterminantVisuals() {
                            // Left vertical line
                            const leftLineDiv = document.createElement("div");
                            leftLineDiv.style.position = "absolute";
                            leftLineDiv.style.left = (matrixTopLeft.x - 40) + "px";
                            leftLineDiv.style.top = (matrixTopLeft.y - 5) + "px";
                            leftLineDiv.style.pointerEvents = "none";
                            leftLineDiv.style.zIndex = "50";
                            leftLineDiv.innerHTML = `
                            <svg width="3" height="${matrixBottomRight.y + SIZE + 10 - (matrixTopLeft.y - 5)}" style="display:block" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.5" y1="0" x2="1.5" y2="${matrixBottomRight.y + SIZE + 10 - (matrixTopLeft.y - 5)}" stroke="white" stroke-width="3"/>
                            </svg>
                            `;
                            container.appendChild(leftLineDiv);
                            svgArray.push(leftLineDiv);

                            // Right vertical line
                            const rightLineDiv = document.createElement("div");
                            rightLineDiv.style.position = "absolute";
                            rightLineDiv.style.left = (matrixBottomRight.x + SIZE + 40) + "px";
                            rightLineDiv.style.top = (matrixTopLeft.y - 5) + "px";
                            rightLineDiv.style.pointerEvents = "none";
                            rightLineDiv.style.zIndex = "50";
                            rightLineDiv.innerHTML = `
                            <svg width="3" height="${matrixBottomRight.y + SIZE + 10 - (matrixTopLeft.y - 5)}" style="display:block" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.5" y1="0" x2="1.5" y2="${matrixBottomRight.y + SIZE + 10 - (matrixTopLeft.y - 5)}" stroke="white" stroke-width="3"/>
                            </svg>
                            `;
                            container.appendChild(rightLineDiv);
                            svgArray.push(rightLineDiv);

                            // Equals sign
                            const equalsY = matrixTopLeft.y + (matrixHeight / 2);
                            const equalsX = matrixBottomRight.x + SIZE*2 + 15;
                            const equalsDiv = document.createElement("div");
                            equalsDiv.style.position = "absolute";
                            equalsDiv.style.left = equalsX + "px";
                            equalsDiv.style.top = (equalsY - 20) + "px"; // Center the equals sign
                            equalsDiv.style.pointerEvents = "none";
                            equalsDiv.style.zIndex = "50";
                            equalsDiv.innerHTML = `
                            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M4 8h32M4 24h32"/>
                            </svg>
                            `;
                            container.appendChild(equalsDiv);
                            svgArray.push(equalsDiv);
                            }

                            signedElArray.forEach((el) => {
                            setTimeout(() => {
                                el.classList.add("group-transition");

                                el.style.left = lastEl.style.left;
                                el.style.top = lastEl.style.top;
                                el.dataset.x = parseFloat(lastEl.style.left);
                                el.dataset.y = parseFloat(lastEl.style.top);
                                

                                if (el !== lastEl) {
                                setTimeout(() => {
                                    //el.classList.remove("group-transition");
                                    el.remove();
                                }, 350);
                                } else {
                                setTimeout(() => {
                                    //el.classList.remove("group-transition");
                                }, 350);
                                }
                            }, 300 + 300 * speedFactor);

                            let detVals = el.querySelector("input.box-input");
                            elSum += parseFloat(detVals.value);
                            if (elcount === expansionElsLast) {
                                setTimeout(() => {
                                detVals.value = elSum;
                                adjustBoxInput(detVals);

                                // Show floating equals symbol next to the final result
                                const symbolX = parseFloat(lastEl.dataset.x) + SIZE / 2;
                                const symbolY = parseFloat(lastEl.dataset.y);
                                
                                createFloatingOperationSymbol(symbolX, symbolY, true, false);
                                }, 650);
                            }
                            elcount += 1;
                            });
                            createDeterminantVisuals();

                            setTimeout(() => {
                            lastEl.style.left = finalResultX + "px";
                            lastEl.style.top = finalResultY + "px";
                            lastEl.dataset.x = finalResultX;
                            lastEl.dataset.y = finalResultY;
                            setTimeout(() => {
                                lastEl.classList.remove("group-transition");
                                svgArray.forEach(el => el.remove());
                            }, 3000);
                            }, 1000 + 1000*speedFactor);

                        }
                        }, 500 + 500 * speedFactor);
                    }
                    );
                }, 500 + 500 * speedFactor);
                } else {
                // For larger matrices, would need recursive expansion
                //console.log("Larger matrix expansion not yet implemented");
                currentExpansionIndex++;
                expandNextElement();
                }
            }, 300 + 300 * speedFactor); // Wait for animation to complete
            }, 10); // Small delay to ensure DOM updates
        }

        // Start expanding
        expandNextElement();
        }

        // Start the determinant calculation
        expandDeterminant();
        saveHistory();
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms + ms * speedFactor));
    }

    let stepMode = false; // Set to true to enable stepping
    /* document.getElementById("step-toggle").addEventListener("click", () => {
        stepMode = !stepMode;
        //alert("Step mode " + (stepMode ? "enabled" : "disabled"));
    }); */

    function waitForSpace() {
        if (!stepMode) {
        // Step mode is OFF: auto-resolve immediately
        return Promise.resolve();
        }
        // Step mode is ON: wait for space bar
        return new Promise(resolve => {
        function onKey(e) {
            if (e.code === "Space") { //ArrowRight
            e.preventDefault();
            window.removeEventListener("keydown", onKey);
            resolve();
            }
        }
        window.addEventListener("keydown", onKey);
        });
    }

    document.getElementById("rref-btn").addEventListener("click", async () => {
        /* const selected = Array.from(container.querySelectorAll(".box.selected:not(.locked)"));
        if (selected.length === 0) return;

        const matrices = clusterBoxes(selected);
        if (matrices.length !== 1) {
        alert("Please select exactly 1 matrix for RREF");
        return;
        }

        // Convert to grid and perform RREF
        const grid = matrixToGrid(matrices[0]); */
        clearLabels();

        const grid = getSingleGrid().grid;
        
        await performRREF(grid);

        saveHistory();
        renderClusterLabels();
    });

    document.getElementById("inverse-btn").addEventListener("click", async () => {

        const matrixObject = getSingleGrid();
        if (!matrixObject) return;

        let { grid, maxX, minY } = matrixObject;

        if (grid.length !== grid[0].length) {
        alert('Matrix has to be square');
        return;
        }

        clearLabels();

        const rows = grid.length;
        const cols = grid[0]?.length || 0;

        // Position for the identity matrix (GAP to the right)
        const identityX = maxX + SIZE + GAP + 40;
        const identityY = minY;

        // Create identity matrix data
        const identityData = [];
        for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const value = (i === j) ? 1 : 0; // 1 on diagonal, 0 elsewhere
            identityData.push({
            value: value,
            relativeX: j * SIZEGAP,
            relativeY: i * SIZEGAP
            });
        }
        }

        const identityBoxes = [];
        // Create the identity matrix boxes
        identityData.forEach(item => {
        const newX = identityX + item.relativeX;
        const newY = identityY + item.relativeY;
        const box = createBox(newX, newY, item.value);
        //box.classList.add('fade');
        identityBoxes.push(box);
        /* box.classList.add('fade');
        setTimeout(() => box.classList.add('in'), 10); */
        /* box.style.opacity = "0";
        box.style.transition = "opacity 0.3s ease";
        box.offsetHeight;

        box.style.opacity = "1"; */
        });
        
        await sleep(10);

        identityBoxes.forEach(box => {
        //box.offsetHeight;
        box.classList.add('in');
        });
        await sleep(700 + 700 * speedFactor);

        const NEW_TOLERANCE = 50;
        const NEW_PROXIMITY = SIZE + 70;

        grid2 = getSingleGrid(NEW_TOLERANCE, NEW_PROXIMITY).grid;

        await performRREF(grid2);
        saveHistory();
        renderClusterLabels();

        /* grid.forEach(box => {
        box.el.style.transition = "opacity 0.3s ease";
        box.el.style.opacity = "0";
        }); */
        
    });

    function getValue(element) {
        const input = element.querySelector("input.box-input");
        return parseFloat(input.value) || 0;
    }

    function setValue(element, value) {
        const input = element.querySelector("input.box-input");
        input.value = value.toString();
        adjustBoxInput(input);
    }

    function findPivotRow(grid, startRow, col) {
        for (let row = startRow; row < grid.length; row++) {
        if (Math.abs(getValue(grid[row][col].el)) > 1e-10) { // Non-zero with tolerance
            return row;
        }
        }
        return -1; // No pivot found
    }

    function lowerInterveningRowsOpacity(grid, sourceRow, targetRow) {
        const start = Math.min(sourceRow, targetRow);
        const end = Math.max(sourceRow, targetRow);

        for (let row = start + 1; row < end; row++) {
        grid[row].forEach(pos => {
            pos.el.style.opacity = "0.3";
        });
        }
    }

    function resetAllOpacities(grid) {
        grid.forEach(row => {
        row.forEach(pos => {
            pos.el.style.opacity = "1";
        });
        });
    }

    // Add the missing swapRows function
    async function swapRows(grid, row1, row2) {
        p('swapRows');

        const row1Elements = grid[row1];
        const row2Elements = grid[row2];

        // Add transition classes
        [...row1Elements, ...row2Elements].forEach(pos => {
        pos.el.classList.add("group-transition");
        });

        await sleep(10); // Force reflow

        // Swap positions
        row1Elements.forEach((pos, i) => {
        const row2Y = row2Elements[i].y;
        pos.el.style.top = row2Y + "px";
        pos.el.dataset.y = row2Y;
        pos.y = row2Y; // Update the grid position
        });

        row2Elements.forEach((pos, i) => {
        const row1Y = row1Elements[i].y;
        pos.el.style.top = row1Y + "px";
        pos.el.dataset.y = row1Y;
        pos.y = row1Y; // Update the grid position
        });

        await sleep(300 + 300 * speedFactor);

        // Remove transition classes
        [...row1Elements, ...row2Elements].forEach(pos => {
        pos.el.classList.remove("group-transition");
        });

        // Update grid references
        [grid[row1], grid[row2]] = [grid[row2], grid[row1]];

        await waitForSpace();
    }

    // Fix the moveInterveningRows function
    async function moveInterveningRows(grid, sourceRow, targetRow) {
        p('moveInterveningRows');

        let canStep = false;
        if (targetRow > sourceRow) {
        // Move all rows below sourceRow (including targetRow and below) down
        for (let row = sourceRow + 1; row < grid.length; row++) {
            grid[row].forEach(pos => {
            pos.el.classList.add("group-transition");
            const newY = parseFloat(pos.el.dataset.y) + SIZEGAP;
            pos.el.style.top = newY + "px";
            pos.el.dataset.y = newY;
            pos.y = newY;
            });
            canStep = true;
        }
        } else if (targetRow < sourceRow) {
        // Move all rows above sourceRow (including targetRow and above) up
        for (let row = 0; row < sourceRow; row++) {
            grid[row].forEach(pos => {
            pos.el.classList.add("group-transition");
            const newY = parseFloat(pos.el.dataset.y) - SIZEGAP;
            pos.el.style.top = newY + "px";
            pos.el.dataset.y = newY;
            pos.y = newY;
            });
            canStep = true;
        }
        }
        await sleep(300 + 300 * speedFactor);

        // Remove transition classes
        for (let row = 0; row < grid.length; row++) {
        grid[row].forEach(pos => pos.el.classList.remove("group-transition"));
        }

        if (canStep) await waitForSpace();
    }

    // Add function to move rows back up after operation
    async function moveRowsBackUp(grid, sourceRow, targetRow) {
        p('moveRowsBackUp');

        if (targetRow > sourceRow) {
        // Move all rows below sourceRow (including targetRow and below) UP
        for (let row = sourceRow + 1; row < grid.length; row++) {
            grid[row].forEach(pos => {
            pos.el.classList.add("group-transition");
            const newY = parseFloat(pos.el.dataset.y) - SIZEGAP;
            pos.el.style.top = newY + "px";
            pos.el.dataset.y = newY;
            pos.y = newY;
            });
        }
        } else if (targetRow < sourceRow) {
        // Move all rows above sourceRow (including targetRow and above) DOWN
        for (let row = 0; row < sourceRow; row++) {
            grid[row].forEach(pos => {
            pos.el.classList.add("group-transition");
            const newY = parseFloat(pos.el.dataset.y) + SIZEGAP;
            pos.el.style.top = newY + "px";
            pos.el.dataset.y = newY;
            pos.y = newY;
            });
        }
        }
        await sleep(300 + 300 * speedFactor);

        // Remove transition classes
        for (let row = 0; row < grid.length; row++) {
        grid[row].forEach(pos => pos.el.classList.remove("group-transition"));
        }

        //await waitForSpace();
    }

    // Update the addRowMultiple function with correct logic
    async function addRowMultiple(grid, sourceRow, targetRow, multiplier) {
        console.log('addRowMultiple', sourceRow, targetRow);
        // Create copies of source row
        const sourceElements = grid[sourceRow];
        const targetElements = grid[targetRow];
        const copies = [];

        let moveDown = 1;
        if (targetRow < sourceRow) {
        moveDown = -1;
        }

        await moveInterveningRows(grid, sourceRow, targetRow);

        await sleep(100);

        sourceElements.forEach(pos => {
        //const copyY = parseFloat(pos.el.dataset.y) + moveDown * SIZEGAP;
        const copy = createCopyOfElement(pos.el, parseFloat(pos.el.dataset.x), parseFloat(pos.el.dataset.y));
        copies.push(copy);
        copy.classList.add("group-transition");
        pos.el.style.opacity = "0.3";
        });

        await sleep(10); // Brief pause to see the copies

        copies.forEach(copy => {
        yVal = parseFloat(copy.dataset.y) + moveDown * SIZEGAP;
        copy.dataset.y = yVal;
        copy.style.top = yVal + 'px';
        });

        await sleep(300);

        // Scalar multiply the copies
        if (Math.abs(multiplier - 1) > 1e-10) {
        await scalarMultiplyRowElements(copies, multiplier);
        }
        // Reset opacities
        resetAllOpacities(grid);

        // Lower opacity of intervening rows
        lowerInterveningRowsOpacity(grid, sourceRow, targetRow);

        await sleep(300 + 300 * speedFactor);

        // Move copies to target row and add
        for (let i = 0; i < copies.length; i++) {
        const copy = copies[i];
        const target = targetElements[i].el;

        copy.classList.add("group-transition");
        copy.style.left = target.dataset.x + "px";
        copy.style.top = target.dataset.y + "px";
        }

        await sleep(300 + 300 * speedFactor);

        // Add values and show symbols
        for (let i = 0; i < copies.length; i++) {
        const copy = copies[i];
        const target = targetElements[i].el;

        // Add values
        const copyValue = parseFloat(copy.querySelector("input.box-input").value) || 0;
        const targetValue = parseFloat(target.querySelector("input.box-input").value) || 0;
        targetInput = target.querySelector("input.box-input");
        targetInput.value = (targetValue + copyValue).toString();
        adjustBoxInput(targetInput);
        
        // Show addition symbol
        const symbolX = parseFloat(target.dataset.x) + SIZE / 2;
        const symbolY = parseFloat(target.dataset.y) + SIZE;
        createFloatingOperationSymbol(symbolX, symbolY, true, true);

        copy.remove();
        }

        // Reset opacities
        resetAllOpacities(grid);

        // Move rows back up to close the gap
        await moveRowsBackUp(grid, sourceRow, targetRow);

        await waitForSpace();
    }

    async function scalarMultiplyRowElements(elements, scalar) {
        p('scalarMultiplyRowElements');

        // Create scalar element for the copies
        const firstElement = elements[0];
        const scalarX = parseFloat(firstElement.dataset.x) - SIZEGAP * 2;
        const scalarY = parseFloat(firstElement.dataset.y);

        const scalarElement = createBox(scalarX, scalarY, scalar.toString());

        // Remove any existing transition classes and set up for fade-in only
        scalarElement.classList.remove("group-transition");
        scalarElement.style.opacity = "0";
        scalarElement.style.transition = "opacity 0.3s ease";

        // Force reflow to ensure styles are applied
        scalarElement.offsetHeight;

        // Fade in scalar
        scalarElement.style.opacity = "1";
        await sleep(500 + 500 * speedFactor);

        // Now set up for position animation
        scalarElement.style.transition = "left 0.3s ease, top 0.3s ease";

        // Force reflow again
        scalarElement.offsetHeight;

        // Move scalar to first element
        scalarElement.style.left = (parseFloat(firstElement.dataset.x) - SIZE) + 'px';
        await sleep(300 + 300 * speedFactor);

        // Fade out and multiply all elements
        scalarElement.style.transition = "opacity 0.3s ease";
        scalarElement.style.opacity = "0";

        elements.forEach(copy => {
        const input = copy.querySelector("input.box-input");
        const currentValue = parseFloat(input.value) || 0;
        input.value = (currentValue * scalar).toString();
        adjustBoxInput(input);

        // Show multiplication symbol
        const symbolX = parseFloat(copy.dataset.x) + SIZE / 2;
        const symbolY = parseFloat(copy.dataset.y);
        createFloatingOperationSymbol(symbolX, symbolY, false, false);
        });

        await sleep(600 + 600 * speedFactor);
        scalarElement.remove();

        await waitForSpace();
    }

    // Fix the scalarMultiplyRow function
    async function scalarMultiplyRow(grid, rowIndex, scalar, pivotValue) {
        p('scalarMultiplyRow');
        
        const rowElements = grid[rowIndex];

        // Create scalar element
        const firstElement = rowElements[0].el;
        const scalarX = parseFloat(firstElement.dataset.x) - SIZEGAP * 2;
        const scalarY = parseFloat(firstElement.dataset.y);

        scalarString = scalar.toString();
        let displayValue;
        if (!isNaN(scalar) && scalarString.includes('.')) {
        const decimalPlaces = scalarString.split('.')[1]?.length || 0;
        if (decimalPlaces > 1) {
            displayValue = "1/" + pivotValue.toString();
        } else {
            displayValue = scalar;
        }
        }
        console.log('scalar:', displayValue);

        const scalarElement = createBox(scalarX, scalarY, displayValue.toString());

        // Remove any existing transition classes and set up for fade-in only
        scalarElement.classList.remove("group-transition");
        scalarElement.style.opacity = "0";
        scalarElement.style.transition = "opacity 0.3s ease";

        // Force reflow
        scalarElement.offsetHeight;

        // Fade in scalar
        scalarElement.style.opacity = "1";
        await sleep(300 + 300 * speedFactor);

        // Set up for position animation
        scalarElement.style.transition = "left 0.3s ease, top 0.3s ease";
        scalarElement.offsetHeight;

        // Move scalar to first element and combine
        scalarElement.style.left = (parseFloat(firstElement.dataset.x) - SIZE) + "px";
        await sleep(300 + 300 * speedFactor);

        // Fade out and multiply all elements
        scalarElement.style.transition = "opacity 0.3s ease";
        scalarElement.style.opacity = "0";

        rowElements.forEach(pos => {
        const input = pos.el.querySelector("input.box-input");
        const currentValue = parseFloat(input.value) || 0;
        input.value = (currentValue * scalar).toString();
        adjustBoxInput(input);

        // Show multiplication symbol
        const symbolX = parseFloat(pos.el.dataset.x) + SIZE / 2;
        const symbolY = parseFloat(pos.el.dataset.y);
        createFloatingOperationSymbol(symbolX, symbolY, false, false);
        });

        await sleep(300 + 300 * speedFactor);
        scalarElement.remove();

        await waitForSpace();
    }

    function getSingleGrid(tolerance = 10, proximity = SIZE + 20) {
        const selected = Array.from(container.querySelectorAll(".box.selected:not(.locked)"));
        if (selected.length === 0) {
        alert("Please select a matrix");
        return;
        }

        const matrices = clusterBoxes(selected, proximity);
        if (matrices.length !== 1) {
        alert("Please select exactly one matrix for identity matrix generation");
        return;
        }

        const matrix = matrices[0];
        //const grid = matrixToGrid(matrix);
        const matrixObject = {
        grid: matrixToGrid(matrix, tolerance),
        maxX: Math.max(...matrix.map(el => parseFloat(el.dataset.x))),
        minY: Math.min(...matrix.map(el => parseFloat(el.dataset.y)))
        };

        return matrixObject;
    }

    // Update the performRREF function to be complete
    async function performRREF(grid) {
        const rows = grid.length;
        const cols = grid[0]?.length || 0;

        let currentRow = 0;

        for (let col = 0; col < cols && currentRow < rows; col++) {
        // Find pivot
        let pivotRow = findPivotRow(grid, currentRow, col);

        if (pivotRow === -1) continue; // No pivot in this column

        // Row swap if needed
        if (pivotRow !== currentRow) {
            await swapRows(grid, currentRow, pivotRow);
        }

        // Scale pivot row to make pivot = 1
        const pivotValue = getValue(grid[currentRow][col].el);
        if (Math.abs(pivotValue - 1) > 1e-10 && Math.abs(pivotValue) > 1e-10) {
            await scalarMultiplyRow(grid, currentRow, 1 / pivotValue, pivotValue);
        }

        // Eliminate column entries above and below pivot
        for (let row = 0; row < rows; row++) {
            if (row !== currentRow) {
            const multiplier = -getValue(grid[row][col].el);
            if (Math.abs(multiplier) > 1e-10) {
                await addRowMultiple(grid, currentRow, row, multiplier);
            }
            }
        }

        currentRow++;
        }
    }
});
