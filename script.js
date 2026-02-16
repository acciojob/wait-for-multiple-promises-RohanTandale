    const output = document.getElementById("output");

        // Function to create a promise with random delay (1–3 seconds)
        function createPromise() {
            const delay = Math.random() * 2 + 1; // Random between 1 and 3 seconds

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

        Promise.all([promise1, promise2, promise3])
            .then((results) => {
                const endTime = performance.now();
                const totalTime = (endTime - startTime) / 1000;

                // Remove Loading row
                output.innerHTML = "";

                // Add individual promise rows
                results.forEach((time, index) => {
                    const row = document.createElement("tr");

                    const promiseCell = document.createElement("td");
                    promiseCell.textContent = `Promise ${index + 1}`;

                    const timeCell = document.createElement("td");
                    timeCell.textContent = time.toFixed(3);

                    row.appendChild(promiseCell);
                    row.appendChild(timeCell);
                    output.appendChild(row);
                });

                // Add Total row
                const totalRow = document.createElement("tr");

                const totalLabel = document.createElement("td");
                totalLabel.textContent = "Total";

                const totalValue = document.createElement("td");
                totalValue.textContent = totalTime.toFixed(3);

                totalRow.appendChild(totalLabel);
                totalRow.appendChild(totalValue);
                output.appendChild(totalRow);
				     });