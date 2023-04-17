import AbstractFigure from './AbstractFigure.js';
import { LinkedList, Point } from '../data_structures/DataStructureIndex.js';

const ROW = 57;
const COL = 86;
const B64 = 'KoGbQU+iSabMULHUxsel3o8v3oEg3oci18OSz8ioVrLMRFOoKoKcQU6iSKXLvsSsmbXk0MGcmbThyMaxV7TMQE6aHR8sHR4sQEKWSKbMv8WumLTjz8CamrXiyMWwVrLMSafMuMOpirLov8WtVajHRVysKoOcPVahREiiJ4iaQE+hREejREeiREejREejREeiSKTLQE+hREejSKXLSKTLSabMREejJ4mbREeiREejREejREejREeiREejI5KaREeiREejHh8uREejREejHh8uREejQE+hJ4iaJ4mbfqvqQ6zKSLHQxsekg7Dxg7Dwxsilx8ilSbHQRK3KSKXLJ4maQE+iJ4mbQE+iR6TLfLDtzcio4r5C3oYh4rU018iTmrbjUbHURFOoJ4eaQE+iRFGnVqjHwMSrmbXkyMawZrbHRl2rREijP0KVHR4sP0KURVGnV6nHwcWsmLTkyMaxZLXHSrDQfLDtkbLsyMawmbXkwcatV6rIQVimREiiREeiQE+hHR8tREejREejJ4mbREeiREejRVOoREejSKXLxsekg7Dxgq/xSKXMQE+iJ4mbREeiREejREejREeiJ4ibQE+iREeiHR8tP0KUREejJ4ibP0KUJ4iaJ4mbI5KafqvqULDUgq/xgq/wk7PsirD1irD1krPrk7Prg7Dwgq/wSLDQRK3KJ4mbPEqVQ0iiSKXMv8SsmLTj0Med18OR2MmUmrXhyMawVrLLRFKnJ4iaQVCiIiQ7QU6bVqjHUbHTWLTMRl2rREijREeiREejHh8uQEKUKoKcQFilVqnHUbHTV7LMR16sR6bMg7DxxsWx25A8z8GbmbXkULDTRFOoKoGbQU6iREeiP0KUJ4iaJ4iaQE+iREejREejREejSKXLgq/wkrPrzsipirD1xsekSKXMQE+iREejJ4mbREejREejQE+hJ4mbREeiGRofREejJ4ibQE+iJ4iaRa7LI5GafqzqULHVgrDxirD1irD1zsipzsipzsiqzsipzsipirD1irD1gq/wSLDQRKzKREahKoGbQVimVqjHwcWsmbXlkrLrkrPryMWwZbbIR16sREijQU6hQ0iiHh8uP0KURFGnRVOoRFKoREijREejKoGbJ4mbPEmUREehQU6iKoKbQVimRVOoRFKnREijSabMv8WtmbXkz8CbmrXiyMaxWLTMRFKnQU+iREijREeiJ4mbQE+iQE+iJ4mbREeiSKXMREejSLHQirD1zsip3Ygtzsipk7PrSbHRREejREejQE+iREejREejJ4mbQE+iHR8tP0KUREejQE+iJ4mbRa7LJ5SgfqzqUbHVxsilirD1zceozsip1cme1cme1cme1sqfk7PrzsipzceoirD1gq/wSLDQHh8uPEqVKoKcQVimVqjHUbLTT7DUUbLVVrLLRl2rKoKcQU+iREeiIiM7GRshP0KUREejREejREejREaiREejQE6hQVCiKoKbQU6iREeiQE6iQ0ijREeiREeiKoGbQVimV6nHwcWtmbXkyMWwZbbHR12rREijREeiREejREejQE+hHiAuHiAuQE+iREejSbHQREejSrLRzsipkrPr1sKRk7PrzsipSLDQREejREejREejJ4mbREejQE+hREejP0KUREejJ4ibREejRa3KJ5SffqzqULHVxsajkrLrzsip18ug1sqf1sug18yh1sqf1sqfzceo1sqfk7PrzceoirD1g7DxHR4sHR8sPEmUQ0iiRFGnRVOoRFKnRFKnRFKnKoOcPVWgQ0iiREejHR8uGBoeP0KUR5rHSaXMSKXLSabMSKXMRVKnREejQU6iREijREejREejKoGcQU+iREejQU+iKoKbQVmmV6rHULHTV7PMR12sREijREeivb/SzM7ZzM7ZREejP0KUP0KUREejREejRFOnREejRFKnWbTLzsipk7PszceoWLPLRVOoREejHh8uHR8tQE+iJ4mbJ4mbREejREejREejQE+hSabMJ5SffqzqULHVgq/wkrPszceo1sqf1sqf1sug4sRC3Yku22sS22oS1sug1sqfzsipk7PrzceoirD1PEmUHB4sQEKUREeiREejREejREejKoGcJ4iaPVahREijREejREejHh8uGRofRJe5uMOoirLogrDxgq/wvsSsV6rIRFGnREejREejKoGbJ4mbPVWgKoKcJ4mbJ4iaPVWhREijRFGnRFOnRVOoREijKoGcucbRYWSuVVipVVipJ4iaJ4mbJ4mbREejREejREejREejSKXMRVOoWbTLUbLVWbTLRVOoJ4iaREejP0KUGRofHR8uQE+iQE+iREejJ4iaREejREejSLDQI5Gaiq/1SLHRzceoirD118ug1sqf4sRC3Yku34gi3oEg47cw176N1sqf1sug1sqfzcaok7PrzceoKoKbPUqVREehKoGbJ4iaQU+iREejQU6iQE+iREijREeiREejKoGcGiYsGRofs7SVmLXjx8WvzceozseomLTkwMSsVqnHRVKoKoKcPVahQE+hKoOcPVWgQE+iQE+hKYKbJ4maQU6hREejvb/SU1apQU6iU1epSZzHSKXMR6TLyNbXyNbXyNXXSabMSKTLREejREejRFKnREejRFKnRFKoRFKnJ4ibQE+hHh8uREejP0KUP0KUREeiREejREejQE+iJ4mbREejKJSgfqvqULHVgq/wkrPszsip1cme4sRC34gi3oEg3oEg47sz18mT1sqf1cme1cme1sug1sugzceo1sugPVWgREijREejQU6iQU+iKoKbQU6hREeiREejREeiREejREejQU6iHSAuGRsfhaHUx8Ww4MRO3o8v4r0/0MedmbXkUbHURVOoQE6hKoKbJ4mbPVahR5zHvsrXy83YUF2oQE+hR5vGSafMU2CtSp3ISKXLR6TLvdPby9jczdrdWLXSWLXSWbXSzNndzNndSabMSKXLSKXLREejREeiREeiREeiQE+hREejP0KUREejJ4iaJ4iaSabMSabMJ4iaREejQE+hJ4mbI5GZirD1SbHRirD1irD11sqf1sug34gh3oEg3oEg3oEg2MqU1sug1sug1sqf1sqf1sug1sqf1sug1sugQFCiKoGbQU6iKoGbJ4iaPVWgKoKbJ4mbQU6iREejKoGbJ4iaQU6iHh8uGRoffp/dzceo3o8w3oEf34ch1sKQYLXPSbHRRVOoKoKcPVWhQU+ivMDSzNjdSKGoN5igR6THSKXLKpSkJ5SfRKLGvdPby9jczNndZbnTWLXRWbbSzNndzdrdzNndWbbSWrbSzNndzNndzNndSKXLREejJ4iaREejREejREejREejJ4ibRK3KI5GaJ5SfJ5SgI5GZJ4iaREejI5CZRa7LL5SjSbHRzsipirD11sqf1cme3oEg3oAf3oAf3oAf1cme1sug1sug1sqf1sqf1sqf1sug1cme1sugKYGbPVWgKYKbPVWgQE+hKoKbPVWgQE+iKoKbJ4iaPVWhQE+iREijRUlXHh8kfp/dzceo4r1A34ch4rUy18iTi7LnULLVKo2hPVWgKoOcusbRSJ+nOJmhdqriS63OfLDtg7DxS63ORK3KvdTbZrrTWbbSWbbSLpml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S09SGRofGRofGRofREejSLDQSbHQGRofGRofGRofGBofGRofREejREejJ4ibRK3KKJSgydbXWLXRzNndWLXSSbHQHioyGRsfGRofGBkeGRofGRsfGBofRUlNHiAkGRofGhsgIYOLGSYsGRsgx8jJ3N7f3N7e3N7e3d/fN5mhI5GaRK3KSbHRSLHQR6/Q0sFH3dvL48ZJOJaOI5CZI5CZI5CZyNbXN5mhI5CZREejSLDQSLDQI5CZ3d/f3N7eI5CZGBofGRofGRofREejREejREejREejREejGRofGRofREejREeiREeiREejREeiGRofGRofREeiREejREejGRofS09TGRofGRofREejSLHQGRofGRofGRofS09SS09SS09SSk9SS09TI5GZI5CZQE+iJ4ibRKzKJ5OfyNXXWbXSSLDQzdreLjA0GRofGBkeGBofGRofGRofGRsfRUlMHiAkGRofGBofIoSMGScsGBofGBofx8nKWbbSSLDQSbHRSbHQSLDQzNndN5mhI5CZQE+iJ4iaRa3KSbHQSLDQSLDQJ5SfyNbXWLXRSLDQSLDQSLDQI5CZI5CZ3d/fGRofGRofGRofREejREejS09SS09SS09SREejREeiREejREeiREejGRofREejREeiREejGRofGRofSbHRGRofGRofSbHRSbHRGBofREeiREejGBofGRofGRofS09SS09SGRofGRofS09SS09TS09TQE+iJ4iaI5GaQE+hREejREeiy83Y3N7eWbbSSLDQHyszGRofGBkeGhsgGBkeGRofRUlNHyAlGRofGRofGBkex8nJLzA1GBkeGhsgGRofxsjJOJmhyNbX48ZJ5MM3OJaOQE+hREejzM3Y3N7eOJmhI5CZyNbX3d7fWbbSSLDQRVOoREejI5CZREejREejI5GaGRofREejGRofS09TS09TGRofREejREeiREejREeiREeiSbHQSLDQSbHRGRofGRofGRofGRofGRofSbHRGRofS09SS09TGRofGRofSLDQGRofGRofGBofGRofGBofGRofGRofS09TS09SGRofGBofGBofREejREeiREejJ4iaI5GaI4+ZI5CZRK3KzNrd3N7eW15iHiAlGRsgGBkeGRsgGBkeRklNHh8kGRofGRsfGRofx8nKLzA0GBkeGhsgGRofGRofx8jJN5mhQE+iREejREejJ4mbyNXXN5mhI5GaGictGBkeIoOMRK3KRVOoREejJ4iaI5GZREejI5GaGRofGBofREejGRofS09SGRofGRofS09SSk9SGRofREeiREejSbHQGRofGRofREeiREejREejREeiSLHQSbHRGRofGRofGRofGRofGRofS09SGRofGRofGRofS09TS09SS09SSbHQS09SGBofGBofSk5SS09TSk9SI5CZQE+hREeiREejREejREejREejREejSKXLSbHQJ5OfGigtGRofGRofGBofGRofRUlNHiAlGRofGBofGRofRUlNS09SHiAlGRofGRofGBofIoSNQE+iREejJ4mbyNbXVVipJ4mbGicsGhsgGBofGBofGBofGRofIoOLI5CZQE+iREejI5GaGRofREejREejS09SS09SS09SGRofGRofS09SGBofREeiREejSbHQGRofGRofREeiGRofGRofGRofGRofGRofGRofGRofGRofS09SS09TS09TGRofGRofS09SGRofS09TS09TGRofS09SGRofSk9SSk9SS09TS09TREejI5CZI5GaI5GaI5CZI5CZI5GaGicsGBofGRofGRofGRofGBoeGRofGBkeGRofGRofGRofRUlNHiAlGRofGBofGRofRUlNHiAkGRofGRofGRofGRofx8jJ3d7f3d7fOJqhI5CZGigtP0KUREejREejREejREejHR8tGRofGRofGRofGRofGRofREeiREeiS09SSk5SS09TGRofGRofREejREeiREejREejREejGRofGRofREeiGRofS09TGRofS09TGRofGRofGRofS09TREejREejS09TGRofREejREejGRofSbHQGRofS09SS09TS09SS09TGRofREeiREejREejREejP0KUHR8tGRofGRofGRofGRofP0KUREejREejREeiREejHh8uRUlNHiAlGRofGRofGRofRUlNHiAkGRofGRofGRofGBofRUlNHiAlGRofGRofGRofGBofx8nKN5mhGictGRofP0KUREejREejHR8tGRofGRofP0KUREejREejREejREejREejREeiS09TGBofGBofGRofREejREejREeiREejGRofGRofGRofREejREejS09TS09SGRofGRofGRofS09SS09TS09TSbHRGRofS09TGRofS09SS09TS09SS09SS09TS09TS09SS09TS09SREeiREejREejGBofGRofREejHh8kQEKVREeiREejREejREejREejREeiREeiHR8tGRofGBofRUlNHiAkGBofGRofGBofGRofGRofGRofGBofGRofGRofGRofGRofRUlNHiAlGRofGRofIoOMGictP0KUREejREejHR8tRUlNS09TSk5SS09THiAlGRofGRofRUlNHiAlGRofGRofGRofGBofS09TGRofGRofGRofGRofGRofREeiREejREejS09TREejS09TGRofREejS09TS09SGBofGRofREejGRofREejGRofS09TGBofS09TS09TREeiS09TGRofGRofGRofS09SS09SS09SSk9SGBofGRofS09TS09THiAlGRofP0KUREejREejREejHh8uGRofGRofGRofGBkeGRsfRUlMHiAlGRofGRofGBofGRofGBofGRofGRofGBkfGRsfGBofRUlNHiAlRklNHiAlGRofGRofP0KUHR8tRUlNS09SS09THiAlGRofRUlNSk9SS09SS09THiAlRUlNS09TSk9SSk9SREejREejREejREeiREejREejREejGBofGBofGRofREejGRofS09TS09TGRofGBofGRofREejGRofGRofGRofREejGRofS09TGBofS09TS09TREejGRofGRofS09TGRofS09TS09TGRofGBofGRofGRofGRofRUlNS09TS09THiAkGRofGRofGRofRUlNSk9SS09SS09THyAlRUlNHiAkGRofGRofGRofGRofGBofGRofGRofGRofGRofGRofGRofGBofRUlNHiAlRUlNHiAlGRofGRofRUlNS09SHh8kQEKUREeiREejREejHR8uRUlNS09TS09THiAlGRofGRofGRofGBofSLDQGBofSLDQGRofGRofGRofS09SS09SGRofGRofS09TGRofGRofGRofGRofSbLRGBofSbLRGBofS09TS09TGRof5MI2GBofS09TS09TS09TGRofS09T5MM3GRofS09SSLDQGRofSk9SGRofGRofS09SHh8uGRofGBkfRUlNS09SRUiaSk5bS09SHiAlP0KUHh8uGRofRUlNHiAlGRofGBofGRofGRofGRofGBofGRofGBkeGBofGRofGRofGRofGRofRUlNHiAkGRofGBofGRofGBkfGRofP0KUHiAuGBkeGBofGRofP0KUHh8uRUlNHiAlRUlNGRofSk9SS09TGBofGBofGRofGBofGRofS09SS09SS09SGRofS09TREejREejREejREeiREejS09TS09TS09TGRofS09TS09TS09TGRofS09TGRofS09TS09TS09TGRofS09TS09SGRofS09SS09SGRofS09SS09SGRofGRofP0KUHR8uGRsfGRofGRofGRofGRofGRofP0KUHh8uGRofGRofRUlNHiAlGBofGRofGBofGRofGRofGBofGRofGBofGRofGRofGRofGRofGBofRUlNHiAlGRofGRofGRofGRofP0KUHh8uGRofRUlMHiAlRUlNHiAlRUlNHiAlQEKUSk5bS09TGBofGRofGRofGRofGRofS09SREejS09SS09SGRofREeiREejREeiS09TS09SS09TS09TS09TGRofGBofGBofGRofS09TGRofGBofGRofGRofGRofGRofS09TGRofGRofGRofGRofGRofGRofGRofGRofGRofGRofGRofHyAlP0KUREeiREejHh8uRUlNS09SS09SHyAlGRofGRofGRofGRofRUlMHh8kGRofGBofGRofGBofGRofGRofGRofGRofGBofGRsfGBofRUlNHiAkRUlNHiAlGRofRUlNHiAlGRofGBofGRofGRofGBofGRofGRofRUlNHiAlRUlNS09T48I1GBofGBofS09TSk9SGRofS09SREejREeiREeiS09SGRofGRofGRofGRofS09SS09TS09TGBofS09TS09TGRofS09TGBofS09TS09TS09TS09TS09TS09TGRofGRofS09TS09TS09TGRofSk9SS09SS09SS09SS09SSk9SGRofGBkeRUlNS09SS09SRUiaHh8uRUlNHiAkGRofGRofGBkfRkpNHiAlGRofGBofGRofGRofGRofGBofGRofGRofGRofGRofGBofGRofGBofGRofGRofGRofGRofRUlMHiAlGRofGBofRUlNS09TS09SS09SHiAlRUlNHiAlQ6C8SllgS09SGBofGRofSk9SS09TGRofS09SS09SREeiS09SGRofGRofGBofGRofGRofS09TGRofGRofS09T48I1S09TS09TGRofS09TS09TS09TS09TS09TS09TS09TGRofGRofS09TS09TS09TGRofGBofGRofGRofGRofGRofGBofGBkfRUlNHyAlRUlNHiAlGRofRUlNHiAlGBofGRofGRofGRofGRofGRofGRofGRofGBofGBofGRofGBofGBofGRofGRofGRofGRofGBofGRofGRofGRofGRofRUlNHiAlGRofRUlNHiAlRUlNS09S07Y5XFxPHiAlGRofGRofRUlNS09TS09TGRofGRofSbHQS09TGRofGRofS09SGRofREejGRofGRofGRofGRofGRofGRofS09TGRofS09TS09TS09TS09TGBofS09TGRofGRofGRofGRofGRofS09TGRofGRofS09TGRofGRofGRofS09SGRofGRofGBofS09SS09T';

class StarryNight extends AbstractFigure {
  constructor(width, height, maxDepth, origin, toCenterFractal) {
    super(width, height, 1000, origin, true);
  }

  set(x, y, w, h, ls = new LinkedList(), r = 0) {
    let starry = this.pixels();
    let c = w < h ? w / COL : h / ROW;
    let doneness = this.recursionDepth / this.maxDepth;
    for (let i = 0; i < starry.length; i++) {
      for (let j = 0; j < starry[i].length; j++) {
        if (Math.random() > doneness)
          continue;
        let p = new Point(j * c, i * c, c, c, null, doneness > 0.65, starry[i][j]);
        p.rotate(Math.PI / (8 * doneness));
        ls.add(p);
      }
    }
    return ls;
  }

  pixels() {
    let R = 0, G = 0, B = 0, n = 0;
    let rgb = atob(B64);
    let ret = new Array(ROW);
    for (let i = 0; i < ROW; i++) {
      ret[i] = new Array(COL);
      for (let j = 0; j < COL; j++) {
        n = (3 * i * COL) + (3 * j);
        R = rgb.charCodeAt(n).toString(16).padStart(2, '0');
        G = rgb.charCodeAt(n + 1).toString(16).padStart(2, '0');
        B = rgb.charCodeAt(n + 2).toString(16).padStart(2, '0');
        ret[i][j] = '#' + R + G + B;
      }
    }
    return ret;
  }

  getTitle() {
    return 'The Starry Night';
  }
}

export default StarryNight;
