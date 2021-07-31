import React from 'react';
import { Container, Row, Col } from "reactstrap";
const Experiences = () => {
  const experience = [
    { title : "Linux", desc : "I know all basic commands, network management, services mangement (systemD), package management (apt, dnf), Apache2 (site hosting, reverse proxy, load balancing), samba (AD/DC, shares, complete MS Windows domain), bind9, OPENSSH" },
    { title : "Terraform", desc : "I can write my own modules, store state remotely, convert specified infrastructure to Terraform code and deploy it to eg. AWS manually or from GH Actions/Jenkins pipeline, use data sources, etc." },
    { title : "Ansible", desc : "I can write basic playbooks, manage AWS EC2 instances or on-prem devices" },
    { title : "Jenkins/GitHub Actions", desc : "I can write basic pipelines in Jenkins or GH Actions to deploy pushed Terraform code, automatically tag new releases etc." },
    { title : "C", desc : "My knowledge of C programming language is based on Kernigan&Ritchie's famous \"ANSI C\" book and what I learned in university. For those classes I created a program, that hides a file inside a BMP file using steganography: C_steganography on my GitHub" },
    { title : "C++", desc : "I know modern C++ capabilities, such as STL (alghoritms, containers), inheritance, templates, exceptions, regex, OOP in C++" },
    { title : "Python", desc : "I worked with Python to write simple scripts to automate tasks on my home server, I've written lambdas for work and written some simple websites in Django"},
    { title : "X86 assembly", desc : "I've programmed in X86 assembly for school assignments and I made a simple bootloader for my custom kernel written in C++ (very much WIP)"},
    { title : "Microcontrolers", desc : "I've designed, built and programmed a nixie lamp clock using arduino with atmega8 and C programming language"},
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-justify mb-5">
              <h3 className="font-weight-normal text-dark"><span className="text-warning">My work experience</span></h3>
              <p className="text-muted text-justify">I specialize in DevOps technologies (specifically Terraform, Ansible, Jenkins, GitHub Actions, Python and AWS), but my interests span across other topics: C/C++ kernel-level development and x86 assembly.</p>
              <p className="text-muted">I graduated from V Highschool in Bielsko-Biała where I was responsible for school's server room and its IT infrastructure. My responibilities were: maintaining about 100 MS Windows clients in network, setting up samba4 AD/DC domain controller with mobile profiles, migrating and maintaining DNS zone on Bind9 server, maintaining SSH/LAMP stack server with students' accounts and integrating those accounts with schools' website.</p>
              <p className="text-muted">After highschool went into college (Silesian University of Technology) in 2019. There I learned C/C++ programming, basics of X86 assembly, basics of electronics (with greater focus on microprocesors, mostly Z80 and 8086), Linux and network administration, design patterns, basic alghoritms, algebra, physics and general computing theory (Turing machine, semaphores, computers architectures etc.).</p>
              <p className="text-muted">In March of 2020 I stared working in Accenture as a DevOps. There I use Terraform to deploy infrastructure to AWS, Ansible to manage remote hosts, Jenkins and GitHub Actions to create and modify pipelines, Jira and Confluence to track my work and GNU/Linux to write and deploy my code.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
            <h3 className="font-weight-bold text-dark"><span className="text-warning">Technologies I work in</span></h3>
        </Row>
        <Row>
          {
            experience.map((exp, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={exp.icon}></i>
                  </div>
                  <h5 className="text-dark font-weight-normal pt-1 mb-4">{exp.title}</h5>
                  <p className="text-muted mb-4 text-justify">{exp.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}
export default Experiences;