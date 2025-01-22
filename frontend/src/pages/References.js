import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const ReferencesContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(#ffffff, #e0f7fa, #80d8ff);
    font-size: 24px;
    color: #002b80;
    font-family: "Inter", sans-serif;
    animation: ${fadeIn} 1s ease-in-out;
    overflow-y: auto;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`;

const BodyContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5% 10%;
    max-height: 100vh;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 10% 5%;
    }
`;

const ReferenceTitle = styled.h1`
    font-size: 32px;
    color: #003366;
    width: 100%;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const ProjectTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 20px;
    color: #003366;
    text-align: left;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

const ReferenceList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const ReferenceItem = styled.li`
    margin-bottom: 15px;
    font-size: 20px;
    line-height: 1.6;
    color: #002b80;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    a {
        color: #1a73e8;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const References = () => {
    // Example references for each project
    const CCCReferences = [
        {
            author: "W. W. Grabowski",
            year: "2004",
            title: "An improved framework for superparameterization",
            link: "https://doi.org/10.1175/1520-0469(2004)061<1940:AIFFS>2.0.CO;2"
        },
        {
            author: "David Randall, Charlotte DeMott, Cristiana Stan, Marat Khairoutdinov, James Benedict, Rachel McCrary, Katherine Thayer-Calder, and Mark Branson",
            year: "2016",
            title: "Simulations of the Tropical General Circulation with a Multiscale Global Model",
            link: "https://doi.org/10.1175/AMSMONOGRAPHS-D-15-0016.1"
        },
        {
            author: "David Randall, Marat Khairoutdinov, Akio Arakawa, and Wojciech Grabowski",
            year: "2003",
            title: "Breaking the Cloud Parameterization Deadlock",
            link: "https://doi.org/10.1175/BAMS-84-11-1547"
        },
        {
            author: "Akio Arakawa, Joon-Hee Jung, and Celal Konor",
            year: "2019",
            title: "Quasi-3D MMF and Global CRM",
            link: "https://hogback.atmos.colostate.edu/cmmap/research/docs/aug07/arakawa.pdf"
        },
        {
            author: "Randall, David",
            year: "2020",
            title: "Implementation of a Quasi-3D Multiscale Modeling Framework to ACME",
            link: "https://www.osti.gov/biblio/1709127"
        },
        {
            author: "Akio Arakawa, and Wayne Howard Schubert",
            year: "1972",
            title: "Interaction of a Cumulus Cloud Ensemble with the Large-Scale Environment, Part I",
            link: "https://doi.org/10.1175/1520-0469(1974)031<0674:IOACCE>2.0.CO;2"
        },
        {
            author: "Akio Arakawa",
            year: "2004",
            title: "The Cumulus Parameterization Problem: Past, Present, and Future",
            link: "https://doi.org/10.1175/1520-0442(2004)017<2493:RATCPP>2.0.CO;2"
        },
        {
            author: "Akio Arakawa, and Chien-Ming Wu",
            year: "2013",
            title: "A Unified Representation of Deep Moist Convection in Numerical Modeling of the Atmosphere. Part I ",
            link: "https://doi.org/10.1175/JAS-D-12-0330.1"
        },
        {
            author: "Kerry A. Emanuel, J. David Neelin, Christopher S. Bretherton",
            year: "1994",
            title: "On large-scale circulations in convecting atmospheres",
            link: "https://doi.org/10.1002/qj.49712051902"
        },

    ];

    const CSSWMReferences = [
        {
            author: "Joon-Hee Jung, Celal S. Konor, and David Randall",
            year: "2019",
            title: "Implementation of the Vector Vorticity Dynamical Core on Cubed Sphere for Use in the Quasi-3-D Multiscale Modeling Framework",
            link: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018MS001517"
        },
        {
            author: "Chungang Chen, Feng Xiao",
            year: "2008",
            title: "Shallow water model on cubed-sphere by multi-moment finite volume method",
            link: "https://doi.org/10.1016/j.jcp.2008.01.033"
        },
        {
            author: "Nair, R. D., Thomas, S. J., & Loft, R. D.",
            year: "2005",
            title: "A Discontinuous Galerkin Global Shallow Water Model",
            link: "https://doi.org/10.1175/MWR2903.1"
        },
        {
            author: "Nair, R. D., Thomas, S. J., & Loft, R. D.",
            year: "2005",
            title: "A Discontinuous Galerkin Transport Scheme on the Cubed Sphere",
            link: "https://doi.org/10.1175/MWR2903.1"
        },
        {
            author: "Robert Sadourny",
            year: "1972",
            title: "Conservative Finite-Difference Approximations of the Primitive Equations on Quasi-Uniform Spherical Grids",
            link: "https://doi.org/10.1175/1520-0493(1972)100<0136:CFAOTP>2.3.CO;2"
        },
        {
            author: "David L. Williamson, John B. Drake, James J. Hack, Rüdiger Jakob, and Paul N. Swarztrauber",
            year: "1992",
            title: "A standard test set for numerical approximations to the shallow water equations in spherical geometry, Journal of Computational Physics",
            link: "https://doi.org/10.1016/S0021-9991(05)80016-6"
        },

    ];

    const VVMReferences = [
        {
            author: "Lipps, F. B., & Hemler, R. S.",
            year: "1982",
            title: "A Scale Analysis of Deep Moist Convection and Some Related Numerical Calculations, Journal of Atmospheric Sciences",
            link: "https://doi.org/10.1175/1520-0469(1982)039<2192:ASAODM>2.0.CO;2"
        },
        {
            author: "Joon-Hee Jung, and Akio Arakawa",
            year: "2008",
            title: "A Three-Dimensional Anelastic Model Based on the Vorticity Equation",
            link: "https://doi.org/10.1175/2007MWR2095.1"
        },
        {
            author: "Robert G. Fovell",
            year: "2017",
            title: "ATM 562: Numerical modeling",
            link: "https://www.atmos.albany.edu/facstaff/rfovell/ATM562/"
        }
    ];

    const ModelDevReferences = [
        {
            author: "Randall, D.",
            year: "2010",
            title: "The Evolution of Complexity in General Circulation Models",
            link: "https://hogback.atmos.colostate.edu/pubs/Complexity.v5.pdf"
        },
        {
            author: "David A. Randall, Cecilia M. Bitz, Gokhan Danabasoglu, A.Scott Denning, Peter R. Gent, Andrew Gettelman, Stephen M. Griffles, Peter Lynch, Hugh Morrison, Robert Pincus, and John Thuburn",
            year: "2018",
            title: "100 Years of Earth System Model Development",
            link: "https://doi.org/10.1175/AMSMONOGRAPHS-D-18-0018.1"
        },
        

    ];

    const GovReferences = [
        {
            author: "Arakawa, A., & Konor, C. S.",
            year: "2009",
            title: "Unification of the Anelastic and Quasi-Hydrostatic Systems of Equations",
            link: "https://doi.org/10.1175/2008MWR2520.1"
        },
    ];

    const renderReferences = (references) => {
        return references.map((ref, index) => (
            <ReferenceItem key={index}>
                {index + 1}. {ref.author} ({ref.year}). <i>{ref.title}</i>. {ref.publisher} 
                {ref.link && <a href={ref.link}> {ref.link}</a>}
            </ReferenceItem>
        ));
    };

    return (
        <ReferencesContainer>
            <Header />
            <BodyContainer>
                <ReferenceTitle>References List</ReferenceTitle>
                <ProjectTitle>Convection Circulation Coupling Framework</ProjectTitle>
                <ReferenceList>
                    {renderReferences(CCCReferences)}
                </ReferenceList>

                <ProjectTitle>Cubed-Sphere Shallow Water Model</ProjectTitle>
                <ReferenceList>
                    {renderReferences(CSSWMReferences)}
                </ReferenceList>

                <ProjectTitle>2D Vector Vorticity Model</ProjectTitle>
                <ReferenceList>
                    {renderReferences(VVMReferences)}
                </ReferenceList>

                <ProjectTitle>Understanding of the Atmospheric Model and Earth System Model Development</ProjectTitle>
                <ReferenceList>
                    {renderReferences(ModelDevReferences)}
                </ReferenceList>

                <ProjectTitle>Understanding of the Atmospheric Governing Equations</ProjectTitle>
                <ReferenceList>
                    {renderReferences(GovReferences)}
                </ReferenceList>
            </BodyContainer>
        </ReferencesContainer>
    );
};

// const References = () => {
//     return (
//         <ReferencesContainer>
//             <Header />
//             <BodyContainer>
//                 <ProjectTitle>Convection Circulation Framework</ProjectTitle>
//                 <ReferenceList>
//                     <ReferenceItem>
//                         David Randall, Marat Khairoutdinov, Akio Arakawa, and Wojciech Grabowski<br></br>
//                         <i>Breaking the Cloud Parameterization Deadlock</i><br></br>
//                         Retrieved from <a href="https://doi.org/10.1175/BAMS-84-11-1547">https://doi.org/10.1175/BAMS-84-11-1547</a>
//                     </ReferenceItem>
//                     {/* Add more ReferenceItem components here as needed */}
//                 </ReferenceList>

//                 <ProjectTitle>Cubed-Sphere Shallow Water Model</ProjectTitle>
//                 <ReferenceList>
//                     <ReferenceItem>
//                         Author, A. A. (Year). <i>Title of work: Capital letter also for subtitle.</i> Publisher.
//                     </ReferenceItem>
//                     <ReferenceItem>
//                         Author, B. B. (Year). <i>Title of article.</i> <i>Title of Periodical, volume number</i>(issue number), pages.
//                         <a href="https://example.com">https://example.com</a>
//                     </ReferenceItem>
//                 </ReferenceList>

//                 <ProjectTitle>2D Vector Vorticity Model</ProjectTitle>
//                 <ReferenceList>
//                     <ReferenceItem>
//                         Author, C. C., & Author, D. D. (Year). <i>Title of chapter.</i> In E. E. Editor (Ed.), <i>Title of book</i> (pp. pages). Publisher.
//                     </ReferenceItem>
//                     <ReferenceItem>
//                         Author, F. F. (Year). <i>Title of conference paper.</i> In G. G. Editor (Ed.), <i>Proceedings Title</i> (pp. pages). Publisher.
//                         <a href="https://example.com">https://example.com</a>
//                     </ReferenceItem>
//                 </ReferenceList>

                

//                 <ProjectTitle>Understanding of the Earth System Model Development</ProjectTitle>
//                 <ReferenceList>
//                     <ReferenceItem>
//                         Randall, D. (2010).  <br></br>
//                         <i>The Evolution of Complexity in General Circulation Models</i>.  <br></br>
//                         Retrieved from <a href="https://hogback.atmos.colostate.edu/pubs/Complexity.v5.pdf">https://hogback.atmos.colostate.edu/pubs/Complexity.v5.pdf</a>
//                     </ReferenceItem>

//                     <ReferenceItem>
//                         David A. Randall, Cecilia M. Bitz, Gokhan Danabasoglu, A.Scott Denning, Peter R. Gent, Andrew Gettelman, Stephen M. Griffles, Peter Lynch, Hugh Morrison, Robert Pincus, and John Thuburn(2018).<br></br>
//                         <i>100 Years of Earth System Model Development.</i><br></br>
//                         Retrieved from <a href="https://doi.org/10.1175/AMSMONOGRAPHS-D-18-0018.1">https://doi.org/10.1175/AMSMONOGRAPHS-D-18-0018.1</a>
//                     </ReferenceItem>


//                 </ReferenceList>

//             </BodyContainer>
//         </ReferencesContainer>
//     );
// };

export default References;
