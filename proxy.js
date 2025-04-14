export default {
  async fetch(request, env, ctx) {
    const csvUrl = "https://secure-csv.denzel.workers.dev/";
    const token = "Bearer iqc.}.gT@N;Aex{H"; // SECRET: kept only here

    const response = await fetch(csvUrl, {
      headers: {
        Authorization: token,
      }
    });

    if (!response.ok) {
      return new Response("Failed to fetch CSV", { status: 500 });
    }

    // Pass it directly to frontend
    const csv = await response.text();
    return new Response(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
}
