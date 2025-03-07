async function Retrieve() {
    var input = document.getElementById("input").value;
    if (input === "") {
        console.log("Empty input");
        return;
    } else {
        var lbdb = await fetch(`data/longbowdb.json`).then(res => res.json());
        database_upto = lbdb["database_info"].upto;
        lb_version = lbdb["database_info"].lb_version;
        var output = document.getElementById("output");
        var lines = input.split("\n").map(line => line.trim().toUpperCase()).filter(line => line);
        lines = [...new Set(lines)];
        if (lines.length > 5000) {
            output.innerHTML = "For querying large number of runs (>5000) at once, please use the database file at `data/longbowdb.json` directly or contact us.";
            return;
        }

        var results = "<table>";
        results += "<thead><tr><th>SRA RUN ID</th><th>Flowcell</th><th>Basecaller</th><th>Basecaller Version</th><th>Mode</th><th>Flowcell and Basecaller Conf</th><th>Basecalling Mode Conf</th><th>Comment</th></tr></thead>";
        total = 0;
        count = 0;

        for (var line of lines) {
            total ++;
            var result = lbdb[line];
            if (result) {
                count ++;
                var pred = result.pred;
                var note = result.note;
                var conf1 = result.conf1;
                var conf2 = result.conf2;
                results += "<tr>";
                if (pred === "Failed") {
                    results += "<td>" + line + "</td>"
                    results += "<td>Failed</td>";
                    results += "<td>Failed</td>";
                    results += "<td>Failed</td>";
                    results += "<td>Failed</td>";
                    results += "<td>-</td>";
                    results += "<td>-</td>";
                } else {
                    var entry = pred.split("-");
                    results += "<td>" + line + "</td>"
                    results += "<td>" + entry[0] + "</td>";
                    results += "<td>" + entry[1] + "</td>";
                    results += "<td>" + entry[2] + "</td>";
                    results += "<td>" + entry[3] + "</td>";
                    results += "<td>" + conf1 + "</td>";
                    results += "<td>" + conf2 + "</td>";
                }
                results += "<td>" + note + "</td>";
                results += "</tr>";
            }
        }

        results += "</table>";
        results += "<p>Found " + count + " out of " + total + " results.</p>";
        results += "<p>Database up to: " + database_upto + "</p>";
        results += "<p>LongBow version: " + lb_version + "</p>";

        if (count !== 0) {
            output.innerHTML = results;
        } else {
            output.innerHTML = "Nothing found in database. Database up to: " + database_upto;
        }
    }
}
