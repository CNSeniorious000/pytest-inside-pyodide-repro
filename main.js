import { loadPyodide } from "pyodide";

const py = await loadPyodide();

await py.loadPackage(["pytest"]);

await py.runPythonAsync(`
    from pytest import main

    main()
`);
