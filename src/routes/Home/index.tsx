import "./styles.css";
import HeaderBar from "../../components/HeaderBar";
import CarCard from "../../components/CarCard";
import CommentCard from "../../components/CommentCard";
import FooterBar from "../../components/FooterBar";

export default function Home() {
  return (
    <main>
      <section className="car-section">
        <HeaderBar />
        <h2>Venha nos visitar</h2>
        <CarCard />
        <CarCard />
      </section>
      <section className="comments-section">
        <h2>O que estão dizendo</h2>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
      </section>
      <FooterBar/>
    </main>
  );
}
