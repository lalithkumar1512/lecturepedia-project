import React from 'react';
import { Link } from 'react-router-dom';
import Course from '../assets/img/project-21.jpg';

const projects = [
  {
    id: 1,
    categories: ['category-1', 'category-3'],
    imageUrl: 'img/project-20.jpg',
    title: 'Mobil',
    description: 'branding, graphic design',
    detailsLink: 'product',
    fancyboxLink: 'img/project-20.jpg',
  },
  {
    id: 2,
    categories: ['category-1', 'category-2'],
    imageUrl: 'img/project-17.jpg',
    title: 'House 212',
    description: 'branding, art direction',
    detailsLink: 'product',
    fancyboxLink: 'img/project-17.jpg',
  },
  {
    id: 3,
    categories: ['category-1', 'category-3'],
    imageUrl: 'img/project-20.jpg',
    title: 'Mobil',
    description: 'branding, graphic design',
    detailsLink: 'product',
    fancyboxLink: 'img/project-20.jpg',
  }

];

const CoursesHome = () => {
  return (
    <div>
      <div className="section over-hide padding-top-120 padding-top-mob-nav padding-bottom-120 background-img-top">
        <div className="section-1400 pt-xl-4">
          <div className="container-fluid padding-top-bottom-80">
            <div className="row">
              <div className="col-lg">
                <h2 className="display-8 mb-3">
                  Popular Courses
                </h2>
              </div>

                 <div className="col-lg-6 align-self-center mt-5 mt-lg-0 text-left text-lg-right">
                      <Link to="/courses" className="btn btn-dark-1 animsition-link">View All<i className="uil uil-arrow-right size-22 ml-3"></i></Link>
                 </div>

            </div>
          </div>
        </div>
        <div className="filter-wrapper-mix portfolio-1400">
          {projects.map(project => (
            <div key={project.id} className={`mix ${project.categories.join(' ')}`}>
                <Link to="/product" >
                  <div className="portfolio-wrap-columns img-wrap mb-4">
                    <div className="section border-4 over-hide">
                      <img src={Course} alt="" />
                      <div className="wrap-mask-black"></div>
                      <div className="portfolio-wrap-center-section text-center">
                        <a href={project.fancyboxLink} data-fancybox="" className="btn btn-portfolio-icon mx-1">
                          <i className="uil uil-heart size-23"></i>
                        </a>
                        <Link to={project.detailsLink} className="btn btn-portfolio-icon animsition-link mx-1">
                          <i className="uil uil-star size-23"></i>
                        </Link>
                      </div>
                    </div>
                    <h5 className="mt-3 mb-1">
                      <Link to="/product" className="link-heading animsition-link">{project.title}</Link>
                    </h5>
                    <p className="mb-0">
                      {project.description}
                    </p>
                  </div>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursesHome;
