
import './Hero.css'
import dot from"../images/Ellipse 18.svg"

function List() {
  

  return (
    <div className="list">
      <h4>
        <img src={dot} alt="hero" className="img-fluid" />
        Qualifications
      </h4>

      <ul>
        <li>
          2014 - 2018
          <br />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </li>
        <li>
          2019 - 2020
          <br />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.
        </li>
      </ul>
      <h4>
        <img src={dot} alt="hero" className="img-fluid" />
        Professional Experience
      </h4>

      <ul>
        <li>
          2020 - 2022
          <br />
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        </li>
      </ul>

      <a className='tbt' href="/">DOWNLOAD MY CV</a>
    </div>
  );
}

export default List;
