/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import 'materialize-css';
import 'aurelia-materialize-bridge';
import 'aurelia-dialog';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName('aurelia-dialog'))

    .plugin(PLATFORM.moduleName('aurelia-materialize-bridge'), bridge => bridge
      .useAutoComplete()
      .useBadge()
      .useBreadcrumbs()
      .useBox()
      .useButton()
      .useCard()
      .useCarousel()
      .useCharacterCounter()
      .useCheckbox()
      .useChip()
      .useCollapsible()
      .useCollection()
      .useColors()
      .useDatePicker()
      .useDropdown()
      .useFab()
      .useFile()
      .useFooter()
      .useInput()
      .useModal()
      .useNavbar()
      .usePagination()
      .useParallax()
      .useProgress()
      .usePushpin()
      .useRadio()
      .useRange()
      .useScrollfire()
      .useScrollSpy()
      .useSelect()
      .useSidenav()
      .useSlider()
      .useSwitch()
      .useTabs()
      .useTooltip()
      .useTransitions()
      .useWaves()
      .useWell()
    );
  // .plugin(PLATFORM.moduleName('aurelia-animator-css'));


  // Uncomment the line below to enable animation.
  // aurelia.use.)      ;
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  await aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
