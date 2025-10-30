import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// --- 1. Configuration Supabase (Côté Serveur) ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const TABLE_NAME = "items";

if (!supabaseUrl || !supabaseServiceKey) {
	throw new Error("Les variables d'environnement Supabase sont manquantes.");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// ----------------------------------------------------------------------
// 🚨 NOTE IMPORTANTE :
// Par défaut, les routes d'API dans l'App Router sont "mises en cache" (statiques).
// Pour une API CRUD où les données changent fréquemment, il est crucial
// de désactiver le cache statique en ajoutant :
export const dynamic = "force-dynamic"; // Force la route à être dynamique (non mise en cache)
// ----------------------------------------------------------------------

// --- 2. Fonctions CRUD Spécifiques (Exportées) ---

// READ (GET) : Récupère tous les items
export async function GET(request) {
	try {
		const { data, error } = await supabase.from(TABLE_NAME).select("*");

		if (error) {
			console.error("Erreur Supabase (GET):", error);
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		// Utilisez NextResponse.json pour renvoyer les données
		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("Erreur interne (GET):", error);
		return NextResponse.json(
			{ error: "Erreur interne du serveur." },
			{ status: 500 }
		);
	}
}

// CREATE (POST) : Ajoute un nouvel item
export async function POST(request) {
	try {
		// Le corps de la requête est lu via .json()
		const itemData = await request.json();

		if (!itemData.name) {
			return NextResponse.json(
				{ error: 'Le champ "name" est obligatoire.' },
				{ status: 400 }
			);
		}

		const { data, error } = await supabase
			.from(TABLE_NAME)
			.insert([itemData])
			.select();

		if (error) {
			console.error("Erreur Supabase (POST):", error);
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json(data[0], { status: 201 });
	} catch (error) {
		console.error("Erreur interne (POST):", error);
		return NextResponse.json(
			{ error: "Erreur interne du serveur." },
			{ status: 500 }
		);
	}
}

// UPDATE (PUT) : Met à jour un item existant
export async function PUT(request) {
	try {
		const { id, ...updates } = await request.json();

		if (!id) {
			return NextResponse.json(
				{ error: "Un ID est requis pour la mise à jour." },
				{ status: 400 }
			);
		}

		const { data, error } = await supabase
			.from(TABLE_NAME)
			.update(updates)
			.eq("id", id)
			.select();

		if (error) {
			console.error("Erreur Supabase (PUT):", error);
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		if (data.length === 0) {
			return NextResponse.json(
				{ error: `Item avec l'ID ${id} non trouvé.` },
				{ status: 404 }
			);
		}

		return NextResponse.json(data[0], { status: 200 });
	} catch (error) {
		console.error("Erreur interne (PUT):", error);
		return NextResponse.json(
			{ error: "Erreur interne du serveur." },
			{ status: 500 }
		);
	}
}

// DELETE (DELETE) : Supprime un item
export async function DELETE(request) {
	try {
		// L'ID est souvent passé par le corps pour DELETE, mais pourrait être en query param
		const { id: idToDelete } = await request.json();

		if (!idToDelete) {
			return NextResponse.json(
				{ error: "Un ID est requis pour la suppression." },
				{ status: 400 }
			);
		}

		const { error } = await supabase
			.from(TABLE_NAME)
			.delete()
			.eq("id", idToDelete);

		if (error) {
			console.error("Erreur Supabase (DELETE):", error);
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		// Retourne 204 No Content pour une suppression réussie
		return new NextResponse(null, { status: 204 });
	} catch (error) {
		console.error("Erreur interne (DELETE):", error);
		return NextResponse.json(
			{ error: "Erreur interne du serveur." },
			{ status: 500 }
		);
	}
}
