   const output = document.getElementById("output");

        // Create a promise with random delay between 1 and 3 seconds
        function createPromise() {
            const delay = Math.random() * 2 + 1; // 1 to 3 seconds

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(delay);
                }, delay * 1000);
            });
        }

        const startTime = performance.now();

        const promise1 = createPromise();
        const promise2 = createPromise();
        const promise3 = createPromise();

        Promise.all([promise1, promise2, promise3]).then((results) => {

            // Remove loading row (Cypress expects this to exist first)
            const loadingRow = document.getElementById("loading");
            if (loadingRow) {
                loadingRow.remove();
            }

            // Populate promise rows
            results.forEach((time, index) => {
                const row = document.createElement("tr");

                const nameCell = document.createElement("td");
                nameCell.textContent = `Promise ${index + 1}`;

                const timeCell = document.createElement("td");
                timeCell.textContent = time.toFixed(3);

                row.appendChild(nameCell);
                row.appendChild(timeCell);
                output.appendChild(row);
            });

            // Total time = longest promise (Promise.all behavior)
            const totalTime = Math.max(...results);

            const totalRow = document.createElement("tr");

            const totalLabel = document.createElement("td");
            totalLabel.textContent = "Total";

            const totalValue = document.createElement("td");
            totalValue.textContent = totalTime.toFixed(3);

            totalRow.appendChild(totalLabel);
            totalRow.appendChild(totalValue);
            output.appendChild(totalRow);
        });