import { Heading, Page, View } from "@shopify/polaris";
import ProduitState from "./Components/ProduitState.js";
//import RT_Footer from "./Components/Footer.js";

var initProds = [];
for (var i = 1; i <= 10; i++)
  initProds.push({
    id: i,
    name: "Produit " + i,
    quantity: i,
    description: "Description du Produit " + i,
  });

const Index = () => (
  <Page>
    {/* <head>
		<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"/>

	</head>


	<body>
	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>

	</body> */}
    <ProduitState initProduits={initProds} />
  </Page>
);

export default Index;
