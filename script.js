Promise.all([promise1, promise2, promise3])
    .then((results) => {

        const loadingRow = document.getElementById("loading");
        if (loadingRow) {
            loadingRow.remove();
        }

        const endTime = performance.now();
        const totalTime = (endTime - startTime) / 1000;

        results.forEach((time, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>Promise ${index + 1}</td>
                <td>${time.toFixed(3)}</td>
            `;
            output.appendChild(row);
        });

        const totalRow = document.createElement("tr");
        totalRow.innerHTML = `
            <td>Total</td>
            <td>${totalTime.toFixed(3)}</td>
        `;
        output.appendChild(totalRow);
    });
