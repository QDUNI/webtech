document.addEventListener("DOMContentLoaded", () => {
    const acd_level = document.getElementById("acd_level__data").innerHTML;
    const program = document.getElementById("program__data").innerHTML;
    const acd_levelDropdown = document.getElementById("acd_level__dropdown");
    const programDropdown = document.getElementById("program__dropdown");
    acd_levelDropdown.value = acd_level == "level1" ? "Bachelor" : "Master";
    programDropdown.value = program;
});