import React, { Component } from "react";
import { ScrollView } from "react-native";

import Movie from "./Movie";

// import styles from './styles';

export default class MovieList extends Component {
  state = {
    movies: [
      {
        vote_count: 3017,
        id: 335983,
        video: false,
        vote_average: 6.5,
        title: "Venom",
        popularity: 369.38,
        poster_path: "/gB7ThItFiRFw18SsE1gWHA92eri.jpg",
        original_language: "en",
        original_title: "Venom",
        genre_ids: [878],
        backdrop_path: "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
        adult: false,
        overview:
          "Eddie Brock (Tom Hardy) é um jornalista investigativo, que tem um quadro próprio em uma emissora local. Um dia, ele é escalado para entrevistar Carlton Drake (Riz Ahmed), o criador da Fundação Vida, que tem investido bastante em missões espaciais de forma a encontrar possíveis usos medicinais para a humanidade. Após acessar um documento sigiloso enviado à sua namorada, a advogada Anne Weying (Michelle Williams), Brock descobre que Drake tem feito experimentos científicos em humanos. Ele resolve denunciar esta situação durante a entrevista, o que faz com que seja demitido. Seis meses depois, o ainda desempregado Brock é procurado pela dra. Dora Skirth (Jenny Slate) com uma denúncia: Drake estaria usando simbiontes alienígenas em testes com humanos, muitos deles mortos como cobaias.",
        release_date: "2018-10-03"
      },
      {
        vote_count: 2008,
        id: 338952,
        video: false,
        vote_average: 7,
        title: "Animais Fantásticos: Os Crimes de Grindelwald",
        popularity: 209.101,
        poster_path: "/qflbWgNtthGGl8nURPfffGEgZu6.jpg",
        original_language: "en",
        original_title: "Fantastic Beasts: The Crimes of Grindelwald",
        genre_ids: [10751, 14, 12],
        backdrop_path: "/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg",
        adult: false,
        overview:
          "Newt Scamander (Eddie Redmayne) reencontra os queridos amigos Tina Goldstein (Katherine Waterston), Queenie Goldstein (Alison Sudol) e Jacob Kowalski (Dan Fogler). Ele é recrutado pelo seu antigo professor em Hogwarts, Alvo Dumbledore (Jude Law), para enfrentar o terrível bruxo das trevas Gellert Grindelwald (Johnny Depp), que escapou da custódia da MACUSA (Congresso Mágico dos EUA) e reúne seguidores, dividindo o mundo entre seres de magos sangue puro e seres não-mágicos.",
        release_date: "2018-11-14"
      },
      {
        vote_count: 52,
        id: 297802,
        video: false,
        vote_average: 5.8,
        title: "Aquaman",
        popularity: 191.104,
        poster_path: "/4CKtfsbNqAf0uDfpLfKQyig6SDu.jpg",
        original_language: "en",
        original_title: "Aquaman",
        genre_ids: [28, 14, 878, 12, 10749],
        backdrop_path: "/9QusGjxcYvfPD1THg6oW3RLeNn7.jpg",
        adult: false,
        overview:
          "Arthur Curry (Jason Momoa), mais conhecido como Aquaman, ainda é um homem solitário, mas quando ele começa uma jornada com Mera (Amber Heard), em busca de um algo muito importante para o futuro de Atlantis, ele aprende que não pode fazer tudo sozinho.",
        release_date: "2018-12-07"
      },
      {
        vote_count: 49,
        id: 428078,
        video: false,
        vote_average: 5.8,
        title: "Máquinas Mortais",
        popularity: 181.253,
        poster_path: "/4qtIczCqcSKiaXon4XmYY0PoT74.jpg",
        original_language: "en",
        original_title: "Mortal Engines",
        genre_ids: [878],
        backdrop_path: "/rxYG6Sj95as9rv9wKIHUx6ATWd3.jpg",
        adult: false,
        overview:
          'Anos depois da "Guerra dos Sessenta Minutos". A Terra está destruída e para sobreviver as cidades se movem em rodas gigantes, conhecidas como Cidades Tração, e lutam com outras para conseguir mais recursos naturais. Quando Londres se envolve em um ataque, Tom (Robert Sheehan) é lançado para fora da cidade junto com uma fora-da-lei e os dois juntos precisam lutar para sobreviver e ainda enfrentar uma ameaça que coloca a vida no planeta em risco.',
        release_date: "2018-12-06"
      },
      {
        vote_count: 1106,
        id: 346910,
        video: false,
        vote_average: 5.2,
        title: "O Predador",
        popularity: 177.786,
        poster_path: "/yhIqpoYFnAra24si0JqFEWdiPOX.jpg",
        original_language: "en",
        original_title: "The Predator",
        genre_ids: [878, 28, 53, 12],
        backdrop_path: "/f4E0ocYeToEuXvczZv6QArrMDJ.jpg",
        adult: false,
        overview:
          "Uma perseguição entre naves alienígenas traz à Terra um novo predador, que acaba sendo capturado por humanos. Antes disso, ele tem seu capacete e bracelete roubados por Quinn McKenna (Boyd Holbrook), um atirador de elite que estava em missão no local onde a nave caiu. A bióloga Casey Brackett (Olivia Munn) é então chamada para examinar o ser recém-descoberto, mas ele logo consegue escapar do laboratório em que é mantido cativeiro. Ao tentar recapturá-lo Casey encontra McKenna, que está em um ônibus repleto de ex-militares com problemas. Juntos, eles buscam um meio de sobreviver e, ao mesmo tempo, proteger o pequeno Rory (Jacob Tremblay), filho de McKenna, que está com os artefatos alienígenas pegos pelo pai.",
        release_date: "2018-09-13"
      },
      {
        vote_count: 2258,
        id: 424694,
        video: false,
        vote_average: 8.2,
        title: "Bohemian Rhapsody",
        popularity: 169.956,
        poster_path: "/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
        original_language: "en",
        original_title: "Bohemian Rhapsody",
        genre_ids: [18, 10402],
        backdrop_path: "/pbXgLEYh8rlG2Km5IGZPnhcnuSz.jpg",
        adult: false,
        overview:
          "Freddie Mercury (Rami Malek) e seus companheiros, Brian May, Roger Taylor e John Deacon mudam o mundo da música para sempre ao formar a banda Queen durante a década de 1970. Porém, quando o estilo de vida extravagante de Mercury começa a sair do controle, a banda tem que enfrentar o desafio de conciliar a fama e o sucesso com suas vidas pessoais cada vez mais complicadas.",
        release_date: "2018-10-24"
      },
      {
        vote_count: 51,
        id: 523873,
        video: false,
        vote_average: 4.4,
        title: "Liga do Kung Fu",
        popularity: 164.01,
        poster_path: "/rW0A73hjzPWVwADlCTLnjLhAFLX.jpg",
        original_language: "zh",
        original_title: "功夫联盟",
        genre_ids: [28, 35],
        backdrop_path: "/blv65adWsJQZ5Iog0OU5opVf6Oa.jpg",
        adult: false,
        overview:
          'Comédia de artes marciais seguindo um grupo de lendas do kung fu se unindo para enfrentar os bandidos. As lendas incluem VINCENT ZHAO reprisando seu papel como "Wong Fei Hung" com DENNIS TO retratando o mestre do "Wing Chun" "Ip Man", DANNY CHAN KWOK KWAN como "Chen Zhen" e ANDY ON como mestre "Huo Yuan Jia".',
        release_date: "2018-10-19"
      },
      {
        vote_count: 231,
        id: 375588,
        video: false,
        vote_average: 6,
        title: "Robin Hood - A Origem",
        popularity: 156.477,
        poster_path: "/3BDOuDfwE7kjnwF5QQtb1LD2ptR.jpg",
        original_language: "en",
        original_title: "Robin Hood",
        genre_ids: [12, 28],
        backdrop_path: "/AuA50D7T7S7OEVcGo0ZKaMhERn0.jpg",
        adult: false,
        overview:
          "A origem da famosa lenda sobre o ladrão que rouba dos ricos para dar aos pobres. Robin Hood (Taron Egerton) volta das Cruzadas e surpreende-se ao encontrar a Floresta Sherwood infestada de criminosos, no mais completo caos. Ele não deixará que as coisas permaneçam desse jeito.",
        release_date: "2018-11-20"
      }
    ]
  };
  render() {
    return (
      <ScrollView>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    );
  }
}
