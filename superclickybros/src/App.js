import React from "react";
import Title from "./components/Title"
import SmashToon from "./components/SmashToon";
import importToons from "./importToons.json";
import "./App.css";


class App extends React.Component {

  state = {
    reset: importToons,
    smashtoons: importToons,
    count: 0
  };

  fillReset = () => {

    var fillObj = [
      {
         "id":  1,
          "name": "MARIO",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/mario.png",
          "clicked": false,
          "position": 0
      },
      {
         "id":  2,
          "name": "DONKEY KONG",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/donkey_kong.png",
          "clicked": false,
          "position": 1
      },
      {
         "id":  3,
          "name": "LINK",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/link.png",
          "clicked": false,
          "position": 2
      },
      {
         "id":  4,
          "name": "SAMUS",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/samus.png",
          "clicked": false,
          "position": 3
      },
      {
         "id":  5,
          "name": "DARK SAMUS",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/dark_samus.png",
          "clicked": false,
          "position": 4
      },
      {
         "id":  6,
          "name": "YOSHI",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/yoshi.png",
          "clicked": false,
          "position": 5
      },
      {
         "id":  7,
          "name": "KIRBY",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/kirby.png",
          "clicked": false,
          "position": 6
      },
      {
         "id":  8,
          "name": "FOX",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/fox.png",
          "clicked": false,
          "position": 7
      },
      {
         "id":  9,
          "name": "PIKACHU",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/pikachu.png",
          "clicked": false,
          "position": 8
      },
      {
         "id":  10,
          "name": "LUIGI",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/luigi.png",
          "clicked": false,
          "position": 9
      },
      {
         "id":  11,
          "name": "NESS",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/ness.png",
          "clicked": false,
          "position": 10
      },
      {
         "id":  12,
          "name": "CAPTAIN FALCON",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/captain_falcon.png",
          "clicked": false,
          "position": 11
      },
      {
         "id":  13,
          "name": "JIGGLYPUFF",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/jigglypuff.png",
          "clicked": false,
          "position": 12
      },
      {
         "id":  14,
          "name": "PEACH",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/peach.png",
          "clicked": false,
          "position": 13
      },
      {
         "id":  15,
          "name": "DAISY",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/daisy.png",
          "clicked": false,
          "position": 14
      },
      {
         "id":  16,
          "name": "BOWSER",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/bowser.png",
          "clicked": false,
          "position": 15
      },
      {
         "id":  17,
          "name": "ICE CLIMBERS",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/ice_climbers.png",
          "clicked": false,
          "position": 16
      },
      {
         "id":  18,
          "name": "SHEIK",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/sheik.png",
          "clicked": false,
          "position": 17
      },
      {
         "id":  19,
          "name": "ZELDA",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/zelda.png",
          "clicked": false,
          "position": 18
      },
      {
         "id":  20,
          "name": "DR. MARIO",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/dr_mario.png",
          "clicked": false,
          "position": 19
      },
      {
         "id":  21,
          "name": "PICHU",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/pichu.png",
          "clicked": false,
          "position": 20
      },
      {
         "id":  22,
          "name": "FALCO",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/falco.png",
          "clicked": false,
          "position": 21
      },
      {
         "id":  23,
          "name": "MARTH",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/marth.png",
          "clicked": false,
          "position": 22
      },
      {
         "id":  24,
          "name": "LUCINA",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/lucina.png",
          "clicked": false,
          "position": 23
      },
      {
         "id":  25,
          "name": "YOUNG LINK",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/young_link.png",
          "clicked": false,
          "position": 24
      },
      {
         "id":  26,
          "name": "GANONDORF",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/ganondorf.png",
          "clicked": false,
          "position": 25
      },
      {
         "id":  27,
          "name": "MEWTWO",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/mewtwo.png",
          "clicked": false,
          "position": 26
      },
      {
         "id":  28,
          "name": "ROY",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/roy.png",
          "clicked": false,
          "position": 27
      },
      {
         "id":  29,
          "name": "CHROM",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/chrom.png",
          "clicked": false,
          "position": 28
      },
      {
         "id":  30,
          "name": "MR. GAME & WATCH",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/mr_game_and_watch.png",
          "clicked": false,
          "position": 29
      },
      {
         "id":  31,
          "name": "META KNIGHT",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/meta_knight.png",
          "clicked": false,
          "position": 30
      },
      {
         "id":  32,
          "name": "PIT",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/pit.png",
          "clicked": false,
          "position": 31
      },
      {
         "id":  33,
          "name": "DARK PIT",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/dark_pit.png",
          "clicked": false,
          "position": 32
      },
      {
         "id":  34,
          "name": "ZERO SUIT SAMUS",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/zero_suit_samus.png",
          "clicked": false,
          "position": 33
      },
      {
         "id":  35,
          "name": "WARIO",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/wario.png",
          "clicked": false,
          "position": 34
      },
      {
         "id":  36,
          "name": "SNAKE",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/snake.png",
          "clicked": false,
          "position": 35
      },
      {
         "id":  37,
          "name": "IKE",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/ike.png",
          "clicked": false,
          "position": 36
      },
      {
         "id":  38,
          "name": "POKÉMON TRAINER",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/pokemon_trainer.png",
          "clicked": false,
          "position": 37
      },
      {
         "id":  39,
          "name": "DIDDY KONG",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/diddy_kong.png",
          "clicked": false,
          "position": 38
      },
      {
         "id":  40,
          "name": "LUCAS",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/lucas.png",
          "clicked": false,
          "position": 39
      },
      {
         "id":  41,
          "name": "SONIC",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/sonic.png",
          "clicked": false,
          "position": 40
      },
      {
         "id":  42,
          "name": "KING DEDEDE",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/king_dedede.png",
          "clicked": false,
          "position": 41
      },
      {
         "id":  43,
          "name": "OLIMAR",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/olimar.png",
          "clicked": false,
          "position": 42
      },
      {
         "id":  44,
          "name": "LUCARIO",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/lucario.png",
          "clicked": false,
          "position": 43
      },
      {
         "id":  45,
          "name": "R.O.B.",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/rob.png",
          "clicked": false,
          "position": 44
      },
      {
         "id":  46,
          "name": "TOON LINK",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/toon_link.png",
          "clicked": false,
          "position": 45
      },
      {
         "id":  47,
          "name": "WOLF",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/wolf.png",
          "clicked": false,
          "position": 46
      },
      {
         "id":  48,
          "name": "VILLAGER",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/villager.png",
          "clicked": false,
          "position": 47
      },
      {
         "id":  49,
          "name": "MEGA MAN",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/mega_man.png",
          "clicked": false,
          "position": 48
      },
      {
         "id":  50,
          "name": "Wii Fit TRAINER",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/wii_fit_trainer.png",
          "clicked": false,
          "position": 49
      },
      {
         "id":  51,
          "name": "ROSALINA & LUMA",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/rosalina_and_luma.png",
          "clicked": false,
          "position": 50
      },
      {
         "id":  52,
          "name": "LITTLE MAC",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/little_mac.png",
          "clicked": false,
          "position": 51
      },
      {
         "id":  53,
          "name": "GRENINJA",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/greninja.png",
          "clicked": false,
          "position": 52
      },
      {
         "id":  54,
          "name": "Mii FIGHTER",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/mii_fighter.png",
          "clicked": false,
          "position": 53
      },
      {
         "id":  55,
          "name": "PALUTENA",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/palutena.png",
          "clicked": false,
          "position": 54
      },
      {
         "id":  56,
          "name": "PAC-MAN",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/pac_man.png",
          "clicked": false,
          "position": 55
      },
      {
         "id":  57,
          "name": "ROBIN",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/robin.png",
          "clicked": false,
          "position": 56
      },
      {
         "id":  58,
          "name": "SHULK",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/shulk.png",
          "clicked": false,
          "position": 57
      },
      {
         "id":  59,
          "name": "BOWSER JR.",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/bowser_jr.png",
          "clicked": false,
          "position": 58
      },
      {
         "id":  60,
          "name": "DUCK HUNT",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/duck_hunt.png",
          "clicked": false,
          "position": 59
      },
      {
         "id":  61,
          "name": "RYU",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/ryu.png",
          "clicked": false,
          "position": 60
      },
      {
         "id":  62,
          "name": "KEN",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/ken.png",
          "clicked": false,
          "position": 61
      },
      {
         "id":  63,
          "name": "CLOUD",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/cloud.png",
          "clicked": false,
          "position": 62
      },
      {
         "id":  64,
          "name": "CORRIN",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/corrin.png",
          "clicked": false,
          "position": 63
      },
      {
         "id":  65,
          "name": "BAYONETTA",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/bayonetta.png",
          "clicked": false,
          "position": 64
      },
      {
         "id":  66,
          "name": "INKLING",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/inkling.png",
          "clicked": false,
          "position": 65
      },
      {
         "id":  67,
          "name": "RIDLEY",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/ridley.png",
          "clicked": false,
          "position": 66
      },
      {
         "id":  68,
          "name": "SIMON",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/simon.png",
          "clicked": false,
          "position": 67
      },
      {
         "id":  69,
          "name": "RICHTER",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/richter.png",
          "clicked": false,
          "position": 68
      },
      {
         "id":  70,
          "name": "KING K. ROOL",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/king_k_rool.png",
          "clicked": false,
          "position": 69
      },
      {
         "id":  71,
          "name": "ISABELLE",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/shizue.png",
          "clicked": false,
          "position": 70
      },
      {
         "id":  72,
          "name": "INCINEROAR",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/gaogaen.png",
          "clicked": false,
          "position": 71
      },
      {
         "id":  73,
          "name": "PIRANHA PLANT",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/packun_flower.png",
          "clicked": false,
          "position": 72
      },
      {
         "id":  74,
          "name": "JOKER",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/joker.png",
          "clicked": false,
          "position": 73
      },
      {
         "id":  75,
          "name": "HERO",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/dq_hero.png",
          "clicked": false,
          "position": 74
      },
      {
         "id":  76,
          "name": "BANJO & KAZOOIE",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/banjo_and_kazooie.png",
          "clicked": false,
          "position": 75
      },
      {
         "id":  77,
          "name": "TERRY",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/terry.png",
          "clicked": false,
          "position": 76
      },
      {
         "id":  78,
          "name": "BYLETH",
          "image": "https://www.smashbros.com/assets_v2/img/fighter/thumb_h/byleth.png",
          "clicked": false,
          "position": 77
      }
    ]  ;
    
    return fillObj;
    

  }
  
  myNewMethod = (clicked, id) => {

    const one = this.fillReset();

    // if id is true reset the game
    if(clicked === true){
      this.setState({
        reset:  one,
        smashtoons:  one,
        count: 0
      });
      
      return;
    } else if (clicked === false){

      let tempToons = [];
      let runtime = 78;

      for (let index = 0; index < 78; index++) {
        
        let randomNum = Math.floor(Math.random() * (runtime));
        runtime--;
  
        tempToons.push(this.state.smashtoons[randomNum]);

        if(tempToons[index].id === id){
          tempToons[index].clicked = !tempToons[index].clicked;
        }
  
        this.state.smashtoons.splice(randomNum, 1);
  
      
        if ((78-1) === index) {
          
          this.setState({
            reset: this.state.reset,
            smashtoons: tempToons,
            count: this.state.count + 1
          });
        }
        
      }

    }

  }

  render() { 
    return (
    <div>
        <Title />
        <span className="topdog"> Joined the Battle: {this.state.count}</span>
        <div className="container">
            <div className="row">
                {this.state.smashtoons.map(smashtoonz => (
                <SmashToon
                    key={smashtoonz.position}
                    id={smashtoonz.id}
                    position={smashtoonz.position}
                    myNewMethod={this.myNewMethod}
                    name={smashtoonz.name}
                    image={smashtoonz.image}
                    clicked={smashtoonz.clicked}
                />
                 ))}
            </div>
        </div>
        <div className="footer row"></div>
    </div>
  );
  }
}

export default App;
