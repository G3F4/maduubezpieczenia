import React from 'react';
import FullScreenDialog from "./FullScreenDialog";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
    '&:hover': {
      backgroundColor: amber[700],
    },
  },
}))(Button);

export default function Insurances() {
  return (
    <section className="colorlib-education" data-section="insurances">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
            <div className="hire" style={{ textAlign: 'center' }}>
              <ColorButton variant="contained" color="primary">
                <a target="_blank" href="https://bezpieczny.pl/27218">
                  <h2 style={{ marginLeft: 20, marginRight: 20 }}>
                    KUPUJ ONLINE 10%&nbsp;TANIEJ
                  </h2>
                </a>
              </ColorButton>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <h2 className="colorlib-heading animate-box">Ubezpieczenia</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-star2"></i></span>
                <h2>Zwierzęta</h2>
              </div>
              <ul>
                <li className="insurancesTileItem">Pies</li>
                <li className="insurancesTileItem">Kot</li>
                <FullScreenDialog
                    firstTitle="Pies i kot"
                    firstContent={
                      <>
                        <Typography style={{ fontSize: 18 }} color="error">
                          W związku z sytuacją panującą w kraju, premiera produktu została przełożona. Informacja o dostępności ubezpieczenia pojawi się na 14 dni przed rozpoczęciem sprzedaży.
                        </Typography>
                        <br />
                        <div>Zainteresowanych proszę o kontakt.</div>
                      </>
                    }
                />
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-user-add-outline"></i></span>
                <h2>Zdrowotne</h2>
              </div>
              <ul>
                <li>Indywidualne</li>
                <li>Grupowe</li>
                <FullScreenDialog
                    firstTitle="Indywidualne"
                    firstContent="Indywidualne ubezpieczenie na życie kierowane jest do osób fizycznych. Ochroną ubezpieczeniową objęte jest zdrowie i życie Ubezpieczonego. W zależności od zdarzenia świadczenie może być wypłacone ubezpieczonemu na dwa sposoby: jednorazowo lub w formie rat."
                    secondTitle="Grupowe"
                    secondContent="Ubezpieczenie obejmuje zdrowie i życie osób wymienionych w umowie. Grupa liczona jest już od trzech osób - może być to rodzina lub pracownicy w jednym zakładzie pracy. Ponadto ubezpieczenie grupowe często jest korzystniejsze pod względem opłat niż w przypadku ochrony jednej osoby."
                />
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-home-outline"></i></span>
                <h2>Majątkowe</h2>
              </div>
              <ul>
                <li>Dom i mieszkanie</li>
                <li>OC w życiu prywatnym</li>
                <FullScreenDialog
                    firstTitle="Dom i mieszkanie"
                    firstContent={`Ubezpieczenie domu lub mieszkania to ochrona dla nieruchomości od wielu zdarzeń losowych. Ustalamy wartość i w zależności od tego czy decydujemy się kupić ubezpieczenie od tzw. ,,zdarzeń nazwanych" czy All risk, nasza nieruchomość jest zabezpieczona m.in. od wydarzeń związanych ze zmianą pogody np. pożar lub powódź, a także te, w które ingerowała osoba trzecia np. kradzież albo dewastacja. Istnieje również możliwość ubezpieczenia nieruchomości w czasie budowy. Dom musi być w stanie zamkniętym surowym, czyli posiadać pełne zadaszenie i zamknięte wszystkie otwory zewnętrzne, jak miejsca na okna i drzwi.`}
                    secondTitle="OC w życiu prywatnym"
                    secondContent="Ubezpieczenie odpowiedzialności cywilnej w życiu prywatnym zabezpiecza nas finansowo na wypadek szkód, które nieumyślnie wyrządzimy osobom trzecim, czyli np. sąsiadom czy przechodniom. Chodzi tutaj zarówno o szkody majątkowe takie jak zniszczenie mienia, czy też osobowe jak np.: uszkodzenie ciała."
                />
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-truck2"></i></span>
                <h2>Komunikacyjne</h2>
              </div>
              <ul>
                <li>OC/AC</li>
                <li>NNW/ASS</li>
                <FullScreenDialog
                    firstTitle="OC/AC"
                    firstContent={<>Każdy właściciel pojazdu mechanicznego musi posiadać ubezpieczenie odpowiedzialności cywilnej. Za jego brak, Ubezpieczeniowy Fundusz Gwarancyjny może nałożyć karę pieniężną określoną w ustawie. Należy pamiętać, że OC chroni nas przede wszystkim od szkód wyrządzonych w wyniku poruszania się naszego pojazdu.<br/>Autocasco jest pakietem dobrowolnym i w zależności od zakresu oraz sum gwarantowanych obejmuje szkody powstałe w skutek losowych zdarzeń. Może zostać wykupione w pakiecie razem z OC lub jako samodzielne ryzyko, niezależne od okresu ochrony obowiązkowego ubezpieczenia.</>}
                    secondTitle="NNW/ASS"
                    secondContent={<>Ubezpieczenie od następstw nieszczęśliwych wypadków można wykupić wraz z ubezpieczeniem OC lub AC. Ubezpieczenie NNW należy do grupy ubezpieczeń osobowych, w których ochroną objęte jest życie i zdrowie kierowcy oraz pasażerów.<br/>
                      W związku z powstałą awarią lub kolizją usługa assistance w zależności od wykupionego wariantu i obowiązującego zakresu ma na celu zapewnienie ubezpieczonemu określonej pomocy technicznej.</>}
                />
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-plane-outline"></i></span>
                <h2>Podróżne</h2>
              </div>
              <ul>
                <li>Turystyczne</li>
                <li>Służbowe</li>
                <FullScreenDialog
                    secondTitle="Służbowe"
                    secondContent="Podczas wyjazdu za granicę w celach zarobkowych, czy też podróży służbowej powinniśmy zadbać o ubezpieczenie kosztów leczenia w razie choroby, bądź nieszczęśliwego wypadku. Należy pamiętać, aby polisa obejmowała swoim zakresem pracę za granicą, w przeciwnym wypadku ubezpieczyciel może odmówić udzielenia pomocy podczas nagłego zdarzenia."
                    firstTitle="Turystyczne"
                    firstContent=" Głównym elementem polis turystycznych jest ubezpieczenie kosztów leczenia, które zapewnia m.in. leczenie szpitalne, ambulatoryjne, wydatki poniesione na leki czy transport między placówkami medycznymi. Koszty leczenia są bardzo zróżnicowane, dlatego trzeba wziąć pod uwagę stawki obowiązujące w miejscu, do którego się aktualnie wybieramy."
                />
              </ul>
            </div>
          </div>
          <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
            <div className="services color-1">
              <div className="insurancesTileHeader">
                <span className="icon2"><i style={{ fontSize: 36 }} className="icon-leaf"></i></span>
                <h2>Rolne</h2>
              </div>
              <ul>
                <li>Gospodarstwo</li>
                <li>OC rolnika</li>
                <FullScreenDialog
                    firstTitle="Gospodarstwo"
                    firstContent="Rolnicy są zobowiązani do wykupienia polisy odpowiedzialności cywilnej oraz do ubezpieczenia budynków zlokalizowanych na terenie gospodarstwa rolnego. Celem obowiązkowego ubezpieczenia budynków gospodarstwa rolnego jest pomoc finansowa w przypadku wystąpienia nieprzewidzianych szkód z różnych przyczyn."
                    secondTitle="OC rolnika"
                    secondContent="Mechanizm działania ubezpieczenia odpowiedzialności cywilnej rolnika działa w sposób taki sam jak OC w życiu prywatnym. W przypadku powstania szkody - uszkodzenia mienia, uszczerbku na zdrowiu czy śmierci osoby trzeciej - ubezpieczyciel wypłaca świadczenie."
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
