async function loadProjects() {
  try {
    const res = await fetch('./projects/projectdata.json');
    const projectData = await res.json();
    console.log(projectData)

    const projectDiv = document.querySelector(".projecttt");

    projectData.forEach((element, index) => {
      const projectBox = document.createElement("div");
      projectBox.className = "projectBox";

      projectBox.innerHTML = `
        <img src="${element.imageSrc}" alt="${element.name}" />
        <div class="btns">
          <button class="btn view-btn">
            <i class="fas fa-eye"></i> View
          </button>
          <a href="${element.codeLink}" class="btn" target="_blank">
            Code <i class="fas fa-code"></i>
          </a>
        </div>
      `;

      // Attach event listener to the "View" button
      const viewBtn = projectBox.querySelector(".view-btn");
      viewBtn.addEventListener("click", () => {
        sendArray(element);
      });

      projectDiv.appendChild(projectBox);
    });
  } catch (error) {
    console.error("Failed to load project data:", error);
  }
}

function sendArray(arr) {
  sessionStorage.setItem("myArray", JSON.stringify(arr));
  window.location.href = "display.html";
}

// Call the function to load projects
loadProjects();
