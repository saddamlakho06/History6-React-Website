import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Menu from '../Header/Menu'
import Header from '../Header/Header'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import DirilisSeason2Pic from './DirilisSeason2Pic.jpg'




function Season2ErtUrdu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <div>
      <Helmet>
        <title>Dirilis Ertugrul Season 2 with Urdu Dubbing</title>
      </Helmet>


      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <Fade top> <h1 style={{ color: '#000', alignItems: 'center' }} >Season 2</h1> </Fade>



      <section className="cards">
        <Fade left>

          <article>
            <h2> Episode 1
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-1">
                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 1" />
              </Link>
            </h2>

          </article>
          <article>
            <h2> Episode 2
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-2">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 2 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 3
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-3">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 3 " />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade right>
          <article>
            <h2> Episode 4
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-4">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 4 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 5
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-5">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 5" />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 6
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-6">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 6" />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade left>
          <article>
            <h2> Episode 7
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-7">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 7" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 8
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-8">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 8" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 9
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-9">


                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 9" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade right>
          <article>
            <h2> Episode 10
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-10">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 10" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 11
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-11">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 11" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 12
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-12">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 12" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade left>
          <article>
            <h2> Episode 13

              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-13">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 13" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 14
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-14">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 14" />
              </Link>

            </h2>


          </article>

          <article>
            <h2> Episode 15
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-15">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 15" />
              </Link>

            </h2>

          </article>

        </Fade>

        <Fade right>

          <article>
            <h2> Episode 16
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-16">
                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 16" />
              </Link>
            </h2>

          </article>
          <article>
            <h2> Episode 17
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-17">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 17 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 18
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-18">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 18 " />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade left>
          <article>
            <h2> Episode 19
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-19">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 19 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 20
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-20">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 20" />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 21
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-21">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 21" />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade right>
          <article>
            <h2> Episode 22
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-22">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 22" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 23
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-23">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 23" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 24
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-24">


                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 24" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade left>
          <article>
            <h2> Episode 25
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-25">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 25" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 26
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-26">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 26" />
              </Link>

            </h2>

          </article>

        </Fade>


        <Fade left>

          <article>
            <h2> Episode 27
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-27">
                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 27" />
              </Link>
            </h2>

          </article>
          <article>
            <h2> Episode 28
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-28">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 28 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 29
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-29">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 29 " />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade right>
          <article>
            <h2> Episode 30
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-30">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 30 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 31
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-31">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 31" />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 32
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-32">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 32" />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade left>
          <article>
            <h2> Episode 33
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-33">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 33" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 34
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-34">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 34" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 35
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-35">


                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 35" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade right>
          <article>
            <h2> Episode 36
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-36">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 36" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 37
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-37">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 37" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 38
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-38">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 38" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade left>
          <article>
            <h2> Episode 39

              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-39">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 39" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 40
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-40">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 40" />
              </Link>

            </h2>


          </article>

          <article>
            <h2> Episode 41
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-41">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 41" />
              </Link>

            </h2>

          </article>

        </Fade>

        <Fade right>

          <article>
            <h2> Episode 42
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-42">
                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 42" />
              </Link>
            </h2>

          </article>
          <article>
            <h2> Episode 43
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-43">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 43 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 44
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-44">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 44 " />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade left>
          <article>
            <h2> Episode 45
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-45">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 45 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 46
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-46">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 46" />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 47
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-47">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 47" />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade right>
          <article>
            <h2> Episode 48
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-48">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 48" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 49
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-49">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 49" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 50
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-50">


                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 50" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade left>
          <article>
            <h2> Episode 51
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-51">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 51" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 52
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-52">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 52" />
              </Link>

            </h2>

          </article>

          <article>

            <h2> Episode 53
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-53">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 53" />
              </Link>

            </h2>

          </article>

        </Fade>


        <Fade right>
          <article>
            <h2> Episode 54
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-54">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 54" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 55
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-55">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 55" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 56
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-56">


                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 56" />
              </Link>

            </h2>

          </article>
        </Fade>





        <Fade left>
          <article>
            <h2> Episode 57
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-57">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 57" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 58
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-58">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 58" />
              </Link>

            </h2>

          </article>

          <article>

            <h2> Episode 59
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-59">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 59" />
              </Link>

            </h2>

          </article>

        </Fade>


        <Fade right>
          <article>
            <h2> Episode 60
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-60">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 60" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 61
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-61">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 61" />
              </Link>

            </h2>

          </article>

        </Fade>

        <Fade left>

          <article>
            <h2> Episode 62
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-62">
                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 62" />
              </Link>
            </h2>

          </article>
          <article>
            <h2> Episode 63
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-63">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 63 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 64
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-64">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 64 " />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade right>
          <article>
            <h2> Episode 65
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-65">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 65 " />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 66
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-66">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 66" />
              </Link>

            </h2>

          </article>
          <article>
            <h2> Episode 67
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-67">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 67" />
              </Link>

            </h2>

          </article>
        </Fade>
        <Fade left>
          <article>
            <h2> Episode 68
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-68">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 68" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 69
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-69">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 69" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 70
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-70">


                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 70" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade right>
          <article>
            <h2> Episode 71
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-71">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 71" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 72
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-72">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 72" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 73
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-73">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 73" />
              </Link>

            </h2>

          </article>
        </Fade>

        <Fade left>
          <article>
            <h2> Episode 74

              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-74">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 74" />
              </Link>

            </h2>

          </article>

          <article>
            <h2> Episode 75
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-75">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 75" />
              </Link>

            </h2>


          </article>

          <article>
            <h2> Episode 76
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-76">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 76" />
              </Link>

            </h2>

          </article>

        </Fade>

        <Fade right>

          <article>
            <h2> Episode 77
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-77">
                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 77" />
              </Link>
            </h2>

          </article>
          <article>
            <h2> Episode 78
              <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-78">

                <img className="article-img" src={DirilisSeason2Pic} alt="Episode 78 " />
              </Link>

            </h2>

          </article>


          <article>
     <h2> Episode 79
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-79">
  
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 79 " />
  </Link>
    
     </h2>
  
</article>

        </Fade>

        <Fade left>
<article>
     <h2> Episode 80
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-80">
    
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 80 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 81
    <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-81">
  
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 81" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 82
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-82">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 82" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 83
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-83">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 83" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 84
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-84">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 84" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 85
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-85">
   
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 85" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 86
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-86">
 
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 86" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 87
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-87">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 87" />
  </Link>
   
    </h2>
  
</article>

<article>

<h2> Episode 88
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-88">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 88" />
    </Link>
  
    </h2>
  
</article>

</Fade>


<Fade right>
<article>
     <h2> Episode 89
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-89">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 89" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 90
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-90">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 90" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 91
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-91">
   
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 91" />
  </Link>
   
    </h2>
  
</article>
</Fade>
   

<Fade left>

<article>
    <h2> Episode 92
    <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-92">
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 92" />
    </Link>
    </h2>
 
</article>
<article>
    <h2> Episode 93
    <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-93">

    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 93 " />
  </Link>
    
     </h2>
 
</article>
<article>
     <h2> Episode 94
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-94">
  
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 94 " />
  </Link>
    
     </h2>
  
</article>
</Fade>
<Fade right>
<article>
     <h2> Episode 95
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-95">
    
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 95 " />
  </Link>
   
     </h2>
  
</article>
<article>
    <h2> Episode 96
    <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-96">
  
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 96" />
  </Link>
   
    </h2>
 
</article>
<article>
     <h2> Episode 97
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-97">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 97" />
  </Link>
   
    </h2>
  
</article>
</Fade>
<Fade left>
<article>
     <h2> Episode 98
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-98">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 98" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 99
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-99">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 99" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 100
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-100">
   
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 100" />
  </Link>
   
    </h2>
  
</article>
</Fade>

<Fade right>
<article>
     <h2> Episode 101
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-101">
 
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 101" />
    </Link>
  
    </h2>
  
</article>

<article>
     <h2> Episode 102
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-102">
   
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 102" />
  </Link>
   
    </h2>
  
</article>

<article>
     <h2> Episode 103
     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-103">
 
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 103" />
    </Link>
  
    </h2>
  
</article>
</Fade>

<Fade left>
<article>
     <h2> Episode 104

     <Link exact to="/dirilis-ertugrul-season2-urdu-dubbing-104">
  
    <img className="article-img" src={DirilisSeason2Pic} alt="Episode 104" />
  </Link>
 
    </h2>
  
</article>

  </Fade>

      </section>


{/* 
             <div className="column">
            <div className="card">
              <h3>Episode 54</h3>
              <div className="iframe-container" >
              <iframe width="250" height="500" src="https://www.youtube.com/embed/aB3hFDApgRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>                </div>
              </div>
            </div> */}
           
      
    </div>
  )
}

export default Season2ErtUrdu;
