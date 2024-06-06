<template>
  <div class="container">
    <!-- Header -->
    <header class="text-center mb-4" >
      <div class="right">
        <img src="https://media.licdn.com/dms/image/D5603AQGPpGlDMHckJg/profile-displayphoto-shrink_800_800/0/1714273705691?e=1723075200&v=beta&t=awKcog3TJOVxAAMO6FeGhSh3pyc_rp2GuZp-6FBYRQA" alt="" />
      </div>
      <div class="left">
        <h1>SREYLUCH LY</h1>
        <p class="lead">Web Developer</p>
        <p>
          <a href="mailto:johndoe@example.com">sreyluchly8@gmail.com</a> | 088
          704 9868
        </p>
      </div>
    </header>

    <!-- Summary Section -->
    <section>
      <h2 class="section-title">Summary</h2>
      <p>
        Experienced web developer with over 5 years of experience in building
        high-quality websites and applications. Proficient in HTML, CSS,
        JavaScript, and various web development frameworks.
      </p>
    </section>

    <!-- Experience Section -->
    <section>
      <h2 class="section-title">Experience</h2>
      <div class="mb-3">
        <h4>Senior Web Developer</h4>
        <h5>XYZ Company</h5>
        <p class="text-muted">June 2018 - Present</p>
        <ul>
          <li>
            Lead the development team in creating responsive and user-friendly
            web applications.
          </li>
          <li>
            Implement new features and optimize existing ones to improve
            performance.
          </li>
          <li>
            Collaborate with designers and stakeholders to deliver high-quality
            products.
          </li>
        </ul>
      </div>
      <div>
        <h4>Junior Web Developer</h4>
        <h5>ABC Corporation</h5>
        <p class="text-muted">January 2015 - May 2018</p>
        <ul>
          <li>
            Assisted in the development and maintenance of company websites.
          </li>
          <li>Worked on front-end and back-end development projects.</li>
          <li>Participated in code reviews and team meetings.</li>
        </ul>
      </div>
    </section>

    <!-- Education Section -->
    <section>
      <h2 class="section-title">Education</h2>
      <div>
        <h4>Bachelor of Science in Computer Science</h4>
        <h5>University of Technology</h5>
        <p class="text-muted">September 2010 - May 2014</p>
      </div>
    </section>

    <!-- Skills Section -->
    <section>
      <h2 class="section-title">Skills</h2>
      <div class="row">
        <div class="col-md-6">
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ResumePage",
};
</script>

<style>
.section-title {
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-bottom: 15px;
}
img{
  width: 300px;
}
</style>
