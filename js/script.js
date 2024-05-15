document.addEventListener('DOMContentLoaded',()=>{

    // ------------handling active element----------
    var biographyBtn = document.getElementById('biography');
    var engagementBtn = document.getElementById('engagement');
    let bioinfo=document.getElementById("info-content1")
    let enginfo=document.getElementById("info-content2")
    // function to shift active button
    function shiftActive() {
        biographyBtn.classList.toggle('active');
        engagementBtn.classList.toggle('active');
    }

    // Function to display biography content
    function bio() {
        bioinfo.style.display = "block";
        enginfo.style.display = "none"; // Hide engagement content
    }

    // Function to display engagement content
    function engagementDisplay() {
        enginfo.style.display = 'block';
        bioinfo.style.display = 'none'; // Hide biography content
    }

    // Function to reset content display
    function reset() {
        bioinfo.style.display = 'none';
        enginfo.style.display = 'none';
    }

    // Add event listener to biographyBtn
    biographyBtn.addEventListener('click', function() {
        shiftActive();
        bio();
    });

    // Add event listener to engagementBtn
    engagementBtn.addEventListener('click', function() {
        shiftActive();
        engagementDisplay();
    });

    // Add event listener to reset content when clicking on bioinfo or enginfo
    bioinfo.addEventListener('click', reset);
    enginfo.addEventListener('click', reset);

    // run class show after hamburg is clicked
    function showMenu(){
        let menuEl=document.getElementById("menu-list");
        document.getElementById("burger").onclick=function(){
            menuEl.classList.toggle("show")
        }
        
    }
    showMenu()
    // skills control 
    function showSkills(){
        document.getElementById("skilled").onclick=()=>{
            document.getElementById('describe').classList.toggle("show");
        }
        document.getElementById("ps").onclick=()=>{
            document.getElementById('photoshop').classList.toggle("show");
        }
        document.getElementById("ill").onclick=()=>{
            document.getElementById('illustrator').classList.toggle("show");
        }
        document.getElementById("python").onclick=()=>{
            document.getElementById('py').classList.toggle("show");
        }
        document.getElementById("c").onclick=()=>{
            document.getElementById('c-lang').classList.toggle("show");
        }
        document.getElementById("js").onclick=()=>{
            document.getElementById('java-script').classList.toggle("show");
        }
        document.getElementById("english").onclick=()=>{
            document.getElementById('eng').classList.toggle("show");
        }
        document.getElementById("kinya").onclick=()=>{
            document.getElementById('kinyarwanda').classList.toggle("show");
        }
        document.getElementById("sw").onclick=()=>{
            document.getElementById('swahili').classList.toggle("show");
        }
    }
    showSkills()

    // menu link is clicked highlight active
    let navLinks = document.getElementById("packet").getElementsByTagName("a");

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", linkSelected);
    }

    function linkSelected(event) {
        let clickedLink = event.target;
        let activeButton = document.getElementsByClassName("active")[0];
        
        if (activeButton) {
            activeButton.classList.remove("active");
        }

        clickedLink.classList.add("active");
    }

    
    
       // Initialize counter
    let max = 5;
    let intervalId; // Variable to store interval ID

    function displayCounter() {
        if (max > 0) {
            max--;
            console.log(max);
        } else if (max === 0) {
            document.getElementById("notification").style.display = "none";
            // Reset max
            max = 5;
        }
    }

    // ----------responding to project info requests-------
    function generateResponse(){
        const userRequest=document.querySelectorAll("#get-info")
        userRequest.forEach(actualRequest=>{
            actualRequest.addEventListener("click",trigerInfo);
        })
    }
    function trigerInfo(){
        let responde=document.querySelectorAll("#responde")
        document.getElementById("desc-project").style.display="block"
        
        responde.forEach(respondeEl=>{
            respondeEl.style.display="none"
        })
        applyChanges()
        

    }
    generateResponse()
    // apply some changes
    function applyChanges(){
        document.getElementById("desc-project").style.boxShadow="0 0 20px 0 rgba(0, 0, 0, 0.5)"
        document.getElementById("nav-bottom").style.display="none"
        document.body.style.background="rgba(0, 0, 0, 0.5)";
        document.getElementById("hello-world").style.display="none"
    }
    // reset changes for project responses
    function resetProject(){
        document.getElementById("cancel").addEventListener("click",function(){
            document.body.style.background="#cccccc54";
            let responde=document.querySelectorAll("#responde")
            document.getElementById("desc-project").style.display="block"
            
            responde.forEach(respondeEl=>{
                respondeEl.style.display="block"
            })
            document.getElementById("hello-world").style.display="flex"
            document.getElementById("desc-project").style.display="none"
            document.getElementById("nav-bottom").style.display="block"
        })
    }
    resetProject()

    // l'm clearing forms once submitted 

    function clearFormAfterSubmission() {
        const form = document.querySelector("form");
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevent default form submission behavior

            // Get form data
            const formData = new FormData(form);

            try {
                // Send form data to Formspree
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                // Check if the message was successfully delivered
                if (response.ok) {
                    form.reset();
                    // Clear existing interval
                    clearInterval(intervalId);
                    // Start new interval
                    intervalId = setInterval(displayCounter, 1000);
                    document.getElementById("notification").style.display = "block";
                } else {
                    console.error("Failed to submit form:", response.statusText);
                }
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        });
    }

// Call clearFormAfterSubmission to set up form submission handling
clearFormAfterSubmission();

// handling request for files
function requestFile() {
    let fileButtons = document.getElementsByClassName("uil-ellipsis-v");
    
    Array.from(fileButtons).forEach(fileButton => {
        fileButton.addEventListener("click", () => {
            let includeFiles = document.getElementsByClassName("include-files");
            Array.from(includeFiles).forEach(file => {
                file.classList.toggle("show");
            });
        });
    });
}

requestFile();

    
    
});