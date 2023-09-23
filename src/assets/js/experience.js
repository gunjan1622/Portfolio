AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Omdena France Chapter",
    cardImage: "/src/assets/images/experience-page/omdena.jfif",
    place: "Remote Internship",
    time: "(November, 2022 - February, 2023)",
    desp: "<li>The goal of this project is to build an NLP classifier to stop cyber bullying targeting children.</li><li>Devised a WebScrapper to detect the offensive words used for child abuse using Snscrape for dataset creation.</li>",
  },
  {
    title: "Microsoft Azure Fundamentals",
    cardImage: "/src/assets/images/experience-page/AZ.png",
    place: "Remote Externship",
    time: "(May, 2022 - June, 2022)",
    desp: "<li>I Cleared the Microsoft Azure AZ-900 Certification.</li><li>This certification gives the foundational aspects and benefits of Microsoft’s Cloud Services.</li><li>Learned how subscriptions work, what support plans are available, and the difference between Infrastructure as a Service, Platform as a Service, and Software as a Service.</li><li>By giving the exam, I had a good understanding of the services provided by Microsoft Azure. such as Compute, Networking, IoT, Big Data, AI, Monitoring, Databases, etc.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Hacktoberfest 2022",
    cardImage: "/src/assets/images/experience-page/h22.jpg",
    description:
      "Contributed to the open source projects of Hacktoberfest 2022.",
  },
  {
    title: "Script Winter Of Code 2021",
    cardImage: "/src/assets/images/experience-page/swoc.jpg",
    description:
      "Participated and thoroughly contributed to the python and API projects of Script Winter Of Code 2021.",
  },
  {
    title: "Cheshire home",
    cardImage: "/src/assets/images/experience-page/cheshire.jpg",
    description:
      "Volunteered at Cheshire home, a home for the differently abled people.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
