import Image from "next/image";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    image: "/images/carbonara.jpg",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "50g parmesan",
      "Black pepper",
      "Salt",
    ],
    steps: [
      "Cook the spaghetti in a large pot of boiling salted water until al dente.",
      "In a large pan, cook the pancetta until crispy.",
      "In a bowl, beat the eggs and mix with the grated cheeses.",
      "Drain the pasta and add it to the pan with the pancetta.",
      "Remove from heat and quickly mix in the egg and cheese mixture.",
      "Season with black pepper and serve immediately.",
    ],
  },
  {
    title: "Chicken Curry",
    image: "/images/curry.jpg",
    ingredients: [
      "500g chicken breast, diced",
      "2 onions, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, minced",
      "2 tbsp curry powder",
      "400ml coconut milk",
      "Salt",
      "Cilantro for garnish",
    ],
    steps: [
      "In a large pot, sauté onions, garlic, and ginger until fragrant.",
      "Add the chicken and cook until browned.",
      "Stir in the curry powder and cook for another minute.",
      "Pour in the coconut milk and bring to a simmer.",
      "Cook for 20 minutes, until the chicken is cooked through.",
      "Season with salt and garnish with cilantro before serving.",
    ],
  },
  // Add more recipes here...
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welcome to my Recipe Book!
        </p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/recipe-book.svg"
          alt="Recipe Book Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <Image
              src={recipe.image}
              alt={`${recipe.title} image`}
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h2 className="mb-3 text-2xl font-semibold">
              {recipe.title}
            </h2>
            <h3 className="text-xl font-medium">Ingredients:</h3>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3 className="text-xl font-medium mt-4">Steps:</h3>
            <ol className="list-decimal list-inside">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </main>
  );
}
