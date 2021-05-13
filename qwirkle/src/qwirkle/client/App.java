package qwirkle.client;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.svg.SVGGElement;
import elemental2.svg.SVGSVGElement;
import elemental2.svg.SVGTransform;
import qwirkle.shared.Qwirkle;
import qwirkle.shared.Qwirkle.Farbe;
import qwirkle.shared.Qwirkle.Form;

public class App implements EntryPoint {

	@Override
	public void onModuleLoad() {
		SVGSVGElement stock = (SVGSVGElement) DomGlobal.document.getElementById("stock");
		
		for (int n = 0; n < 6; n++) {
			stock.appendChild(createTile(stock, Form.values()[n], Farbe.values()[n], 50 + n*100, 0));
		}
	}

	private SVGGElement createTile(SVGSVGElement svg, Qwirkle.Form form, Farbe farbe, double x, double y) {
		SVGGElement g = (SVGGElement) DomGlobal.document.createElementNS("http://www.w3.org/2000/svg", "g");

		switch (form) {
		case circle:
			g.innerHTML = 
				"<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n" + 
				"<circle class=\"circle icon\" cx=\"50\" cy=\"50\" r=\"33\" />\n"; 
			break;
		case cross:
			g.innerHTML = 
				"<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n" + 
				"<path class=\"cross icon\" d=\"M 21.963695,78.155899 C 39.526153,95.724298 49.979405,58.1379 49.979405,58.1379 c 0,0 9.948885,38.090944 28.01571,20.017999 C 96.061942,60.082953 57.983894,50.1307 57.983894,50.1307 c 0,0 38.500723,-9.315711 20.011221,-28.02519 -18.489501,-18.7094883 -28.01571,20.017999 -28.01571,20.017999 0,0 -9.631968,-38.4079622 -28.01571,-20.017999 -18.3837416,18.389962 20.011222,28.02519 20.011222,28.02519 0,0 -37.57368,10.456799 -20.011222,28.025199 z\"/>\n"; 
			break;
		case diamond:
			g.innerHTML = 
				"<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n" + 
				"<path class=\"diamond icon\" d=\"m 49.989114,11.998163 c -0.996267,0 -37.19392,37.579363 -37.19392,37.579363 l 37.19392,37.579362 37.193919,-37.579362 z\" />\n"; 
			break;
		case pounce:
			g.innerHTML = 
				"<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n" + 
				"<path class=\"spike icon\" d=\"M 113.43171,-13.559393 100.75936,5.8642659 113.55939,25.928944 94.135735,13.256602 74.071056,26.056632 86.743399,6.6329732 73.943368,-13.431705 93.367027,-0.75936255 Z\" transform=\"matrix(1.8230645,0,0,1.8176604,-120.91481,38.639104)\" />\n"; 
			break;
		case square:
			g.innerHTML = 
				"<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n" + 
				"<rect class=\"square icon\" width=\"56\" height=\"56\" x=\"22\" y=\"22\" />\n"; 
			break;
		case star:
			g.innerHTML = 
				"<rect class=\"tile\" width=\"96\" height=\"96\" x=\"2\" y=\"2\" ry=\"3.6773801\" rx=\"3.6773801\" />\n" + 
				"<path class=\"star icon\" d=\"m 47.489846,237.05051 -7.335371,10.98093 11.545767,6.40966 -13.158765,1.11147 2.187395,13.0232 -9.073341,-9.59494 -8.81813,9.83001 1.844494,-13.07618 -13.183424,-0.76538 11.373387,-6.71078 -7.621329,-10.78442 12.337887,4.70797 3.679781,-12.68257 4.011708,12.58152 z\" transform=\"matrix(1.6758019,0,0,1.5098984,-2.8532488,-327.23319)\" />\n"; 
			break;
		}
		
		g.className.baseVal = farbe.name();
		
		SVGTransform tx = svg.createSVGTransform();
		tx.setTranslate(x, y);
		g.transform.baseVal.initialize(tx);
		
		return g;
	}

}
