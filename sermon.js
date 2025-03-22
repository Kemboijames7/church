document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("slug");

    if (!slug) {
        document.body.innerHTML = "<h1>Sermon Not Found</h1>";
        return;
    }

    console.log("Fetching sermon:", slug);

    try {
        const response = await fetch(`http://localhost:5000/sermon/${slug}`);
        const sermon = await response.json();

        if (!sermon) {
            console.error("Sermon not found");
            return;
        }

        document.body.innerHTML = `
            <h1>${sermon.theme}</h1>
            <iframe width="560" height="315" src="${sermon.videoUrl}" frameborder="0" allowfullscreen></iframe>
            <p><strong>Pastor:</strong> ${sermon.pastor}</p>
            <p><strong>Scripture:</strong> ${sermon.scripture}</p>
            <p><strong>Date:</strong> ${new Date(sermon.date).toDateString()}</p>
            <p>${sermon.notes}</p>
            <a href="index.html">Back to Sermons</a>
        `;
    } catch (error) {
        document.body.innerHTML = "<h1>Error Loading Sermon</h1>";
    }
});
