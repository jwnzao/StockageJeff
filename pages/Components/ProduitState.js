import {useState, useRef} from 'react';
import ListeProduits from "./ListeProduits.js";

function ProduitForm({addProds:addproduit}) {
	
	const nameRef = useRef();
	
	const [name, setName] = useState(" ");
	const [quantity, setQuantity] = useState(" ");
	const [description, setDescription] = useState(" ");
	

	const handleInput = event => {
		switch(event.target.name){
			case 'name':
				setName(event.target.value);
				break;
			case 'quantity':
				setQuantity(event.target.value);
				break;
			case 'description':
				setDescription(event.target.value);
				break;
		}
	};
	
	const ajouter = (p) => {
		// ?????
		let data = {
			id:null,
			name:name,
			quantity:quantity,
			description:description
		}
		if (data['name'] == ' '){
			alert('Veuillez saisir un nom de produit');
		}else if(data['quantity'] == ' '){
			alert('Veuillez saisir une quantitée');
		}else if(data['description'] == ' '){
			alert('Veuillez saisir une description');
		}else{
		
			addproduit(data);
		}
		
		// addProduit(?????);
	}
	
	return (
		<div>
			<input onChange={handleInput} name='name' type="text" placeholder="Nom du produit" /><br />
			<input onChange={handleInput} name='quantity' type="number" min="0" step="1" placeholder="Quantité" /><br />
			<textarea onChange={handleInput} name='description' placeholder="Description du produit" /><br />
			<button onClick={ajouter}>Ajouter</button>
		</div>
	);
}

export default function ProduitState({initProduits}) {
	const [prods, setProds] = useState(initProduits);
	// console.log("refresh tableau");
	function addProds(newProduit) {
		
		
		setProds(prods.concat({id:prods.length, name:newProduit['name'],quantity: newProduit['quantity'],description: newProduit['description']}));
		// prods.concat();
		// console.log(prods);
		
		// setProds({{id:prods.length, name:newProduit['name'],quantity: newProduit['quantity'],description: newProduit['description']}});
		// return 
		// ProduitState(prods);
	}
	return <>
		<ProduitForm  addProds={addProds}   />
		<ListeProduits produits={prods} setProduits={setProds} />
	</>;
}

