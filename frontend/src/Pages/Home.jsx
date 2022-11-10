import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { all_projects } from "../Redux/Actions/projectAction";
import Loading from "./Loading";
import "../Styles/projects.scss";
import ProjectCard from "./ProjectCard";
import img1 from "../Imgs/img4.gif";
import Banner from "./Banner";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, projects } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(all_projects());
  }, [dispatch]);
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <div className="main">
          <div>
            <Banner img={img1} />
          </div>
          <div className="paralex">
            <div className="bg-1">
              <h1>Resume</h1>
              <div className="resume">
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aspernatur neque architecto cum, quae sapiente id inventore
                    totam adipisci? Quis pariatur fuga hic nihil aspernatur
                    numquam delectus harum tempora? Laborum odio corrupti
                    voluptate reiciendis? Harum doloribus illum in reiciendis
                    animi aliquid enim vel perferendis iste, alias minus, quos
                    modi debitis dolorum veniam sapiente reprehenderit ab hic
                    laudantium exercitationem? Sapiente doloribus officiis
                    architecto doloremque libero maxime modi ipsum voluptatum
                    ipsam itaque debitis deserunt accusamus aut, tempore nostrum
                    odit asperiores, repellat delectus earum veniam perspiciatis
                    distinctio nobis. Veniam nam molestias fugit illum corporis
                    provident dolore a, qui dolorem odit consequuntur dolores
                    eveniet deleniti laboriosam laudantium fuga atque? Dolorum
                    iste sed unde neque quia. Enim veniam quos recusandae vitae,
                    suscipit porro fugit eligendi, ipsa quidem repellendus
                    reiciendis mollitia aspernatur voluptate libero
                    exercitationem blanditiis perspiciatis, ad officiis
                    perferendis tempore doloremque hic. Laudantium quasi vel sed
                    vitae. Porro explicabo illum odio ullam facilis. Temporibus
                    quibusdam architecto corporis necessitatibus repellendus
                    distinctio, inventore at harum laudantium placeat aut
                    ratione, laborum omnis expedita corrupti eaque facilis
                    recusandae est quisquam amet dignissimos. Cum ducimus
                    adipisci dicta harum voluptate quaerat neque laudantium
                    accusamus a magni provident id distinctio, numquam natus
                    voluptatem eos omnis cumque ratione, quod molestias tempore
                    qui similique ipsam.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Officiis voluptatem alias sint quae reprehenderit ullam
                    possimus, quaerat recusandae optio, eius laborum quibusdam a
                    minima deserunt vitae! Deleniti repellat quod quos vitae
                    eveniet amet ratione iure, quae facilis vero voluptas illum
                    tenetur odio praesentium ea cupiditate labore pariatur
                    delectus obcaecati ad numquam. Asperiores cupiditate quod
                    laborum culpa eaque vel, magni ex repellendus iste,
                    consequuntur expedita, voluptates qui a dolore illum dolorem
                    natus veniam numquam reprehenderit. Deserunt deleniti
                    dolorem sunt error, ducimus alias, officia eum nisi
                    quibusdam perferendis assumenda nesciunt. Ex cumque,
                    doloremque odit esse ut ad optio assumenda praesentium rem
                    nesciunt error sapiente neque, earum tempora accusantium
                    accusamus quo aut exercitationem nulla porro voluptas! Magni
                    id aut laborum! Accusamus, fuga. Sequi accusantium expedita
                    aliquid. Excepturi doloremque culpa dolores dolorum nulla
                    officiis reprehenderit esse at voluptatem consequatur!
                    Veritatis error labore vitae dignissimos. Deserunt veritatis
                    sint ipsa nostrum, quibusdam, atque aspernatur aut iure quo
                    ducimus voluptatum veniam minus? Harum doloremque omnis
                    libero aliquid. Inventore ex architecto porro ut autem ipsam
                    molestias, provident optio accusamus, quibusdam est
                    blanditiis laboriosam. Iste, ad, beatae obcaecati maiores
                    atque iure a consequuntur, ipsa eveniet quis deleniti
                    similique neque ipsum. Illum reiciendis itaque nobis dolorum
                    animi, iure eveniet! Tenetur!
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam suscipit similique, reiciendis vitae modi deserunt
                    quibusdam, hic omnis aperiam asperiores, dolores quis harum
                    consequatur fugiat obcaecati maxime dignissimos. Ullam
                    reprehenderit perspiciatis dolorum optio eum, consequatur
                    unde magnam deserunt numquam commodi esse praesentium, quasi
                    non libero nesciunt quas dolorem sequi velit cupiditate,
                    officia sint molestiae quia. Sequi quibusdam necessitatibus
                    totam eum harum neque consequuntur deleniti adipisci quasi.
                    Obcaecati fuga debitis dolore omnis consequuntur,
                    dignissimos est quis libero deleniti necessitatibus!
                    Adipisci eveniet voluptatibus amet eius, veritatis illo
                    recusandae culpa consequuntur nobis ut temporibus molestias
                    quaerat corporis qui nesciunt iure repudiandae maiores.
                    Doloremque iure dignissimos iste odio veniam asperiores
                    perspiciatis deserunt quos, eaque cupiditate qui accusantium
                    incidunt maiores unde. Nihil animi nostrum autem omnis earum
                    amet sed neque consequuntur, sit laboriosam dolore explicabo
                    nisi, aut illo debitis fugiat pariatur magni natus delectus,
                    deserunt aliquid. Saepe natus laudantium, consectetur
                    assumenda fugiat enim inventore accusantium. Hic alias error
                    molestiae doloribus aspernatur officia exercitationem!
                    Architecto, delectus ea hic cumque, voluptatem nesciunt sed
                    eaque natus odit maiores maxime molestiae reprehenderit odio
                    reiciendis mollitia quisquam? Modi obcaecati laborum illo
                    quos, mollitia veritatis nemo ab ipsum odit at consequuntur
                    magni accusamus, corrupti velit doloribus dolore deserunt
                    dolorum cupiditate nulla.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-2">
              <div className="srisir">
                <h2>Projects</h2>
                <div className="projects">
                  {projects &&
                    projects.map((project) => (
                      <div key={project._id}>
                        <ProjectCard project={project} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="bg-3">
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, minima aut dicta ipsa nobis porro adipisci aperiam
                voluptatum reprehenderit sequi ipsam iusto optio accusamus
                repellendus dolor distinctio nulla deserunt eius autem molestiae
                aliquam. Iste repellat quis illo fugit sint? Eveniet similique,
                quidem omnis necessitatibus placeat veritatis eos blanditiis hic
                porro aliquid, saepe nesciunt, eum repellendus iste et. Officiis
                nesciunt ullam libero dolore animi nostrum magni nemo veritatis
                rem minima placeat, sint voluptas, at earum amet odit.
                Blanditiis delectus corporis et, atque in facilis optio quae
                laborum magni rem repudiandae non, excepturi consequatur
                asperiores dignissimos nam cumque numquam est aliquid ipsam ut
                omnis! Dicta, possimus ipsum dolores provident ab, explicabo
                quaerat, voluptates saepe ea cumque dolore velit blanditiis
                delectus quas sint? Iure fugiat corporis, labore commodi
                reiciendis ea quas optio omnis eos earum ad, quasi aperiam
                cupiditate architecto laudantium, veritatis delectus aspernatur
                placeat ipsum laborum? Sequi commodi ab iusto expedita
                exercitationem deserunt illum in repellat dolore suscipit?
                Quibusdam impedit esse aliquid, earum vel perspiciatis eos
                asperiores. Magni sint quas earum, ut voluptatum quo
                reprehenderit, ab consectetur cupiditate quos, iusto nulla
                officia sequi consequatur placeat! Architecto reprehenderit
                soluta aut iure quisquam iste eaque dicta? Eius reprehenderit
                magnam odio inventore nihil incidunt recusandae assumenda.
                Maiores praesentium error, cum sit rerum suscipit architecto
                officiis dolorum iste delectus, eligendi voluptas, iusto
                voluptatum. Possimus doloribus laborum, iure suscipit sapiente
                totam commodi odio a fugit illum animi magni quasi. Repudiandae
                eos ex ducimus voluptatem aliquid ullam culpa, quae beatae
                consequatur ipsa! Necessitatibus rerum neque eum sequi quidem
                perferendis expedita dignissimos, corporis nesciunt quasi
                deserunt obcaecati illo eligendi reprehenderit? Molestiae minima
                repellat, maxime laudantium provident perferendis eius molestias
                officiis modi sit, ducimus soluta aperiam id distinctio rem
                amet. Quae tempore ex repellat voluptatibus numquam vero nulla
                quasi, at repellendus cumque? Accusamus sequi nostrum esse
                voluptatem nemo, placeat natus non quam unde earum culpa
                deserunt nisi neque cumque aut repellat quos modi. Quod
                voluptate deserunt facilis corporis consequuntur commodi ab
                laboriosam eos necessitatibus iusto nobis assumenda culpa illum
                atque, facere voluptas dicta voluptatibus aperiam soluta id
                veritatis, minus ipsa. Nihil nostrum optio nulla, repudiandae
                minus, ducimus debitis enim minima nisi, voluptatem corrupti
                sequi exercitationem adipisci expedita voluptatibus assumenda
                sunt deserunt eius nam at ad blanditiis officiis perspiciatis
                beatae. Architecto quae officiis, repellat reprehenderit
                sapiente, ipsum vel quam quaerat suscipit deleniti a officia
                placeat animi error illo. Exercitationem, repellendus. Eveniet
                quibusdam iste voluptate inventore unde culpa possimus hic
                facere amet.
              </p>
            </div>
            <div className="bg-4">
              <h1>Experienced</h1>
              <div>ex-1</div>
              <div>ex-2</div>
              <div>ex-3</div>
              <div>ex-4</div>
              <div>3x-5</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
