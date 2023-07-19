// window.addEventListener('DOMContentLoaded', async event => {
//     console.log('DOMContentLoaded event fired'); // Check if the event is firing

//     const table = $('#datatablesSimple').DataTable({
//         columns: [
//             { title: 'ID', data: 'ID' },
//             { title: 'Date and Time', data: 'date' },
//             { title: 'Temperature', data: 'temperature' },
//             { title: 'Humidity', data: 'humidity' },
//             { title: 'CO2', data: 'CO2' }
//         ],
//         paging: true,
//         pageLength: 10,
//         lengthMenu: [5, 10, 15, 20],
//         ordering: true,
//         searching: true,
//         responsive: true,
//         buttons: [
//             'copy',
//             'excel',
//             'pdf',
//             'print'
//         ],
//         // Specify any additional options here
//     });

//     async function updateTable() {
//         try {
//             const response = await fetch('/fetch_data.php');
//             console.log('Fetch response status:', response.status); // Check fetch response status

//             if (!response.ok) {
//                 throw new Error('Error loading data');
//             }

//             const data = await response.json();
//             console.log('Retrieved data:', data); // Output the retrieved data to the console

//             table.clear().rows.add(data).draw();
//         } catch (error) {
//             console.error('Error loading data:', error);
//         }
//     }

//     // Call updateTable initially
//     updateTable();

//     // Call updateTable every 5 seconds
//     setInterval(updateTable, 5000);
// });

window.addEventListener('DOMContentLoaded', async event => {
    console.log('DOMContentLoaded event fired'); // Check if the event is firing

    const table = $('#datatablesSimple').DataTable({
        columns: [
            { title: 'ID', data: 'ID' },
                        { title: 'Date and Time', data: 'date' },
                        { title: 'Temperature', data: 'temperature' },
                        { title: 'Humidity', data: 'humidity' },
                        { title: 'CO2', data: 'CO2' }
        ],
        paging: true,
        pageLength: 10,
        lengthMenu: [5, 10, 15, 20],
        ordering: true,
        searching: true,
        responsive: true,
        buttons: [
            'copy',
            'excel',
            'pdf',
            'print'
        ],
        // Specify any additional options here
    });

    async function updateTable() {
        try {
            const response = await fetch('../fetch_data.php');
            console.log('Fetch response status:', response.status); // Check fetch response status

            if (!response.ok) {
                throw new Error('Error loading data');
            }

            const data = await response.json();
            console.log('Retrieved data:', data); // Output the retrieved data to the console

            table.clear().rows.add(data).draw();
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    // Call updateTable initially
    updateTable();

    // Call updateTable every 5 seconds
    setInterval(updateTable, 5000);
});