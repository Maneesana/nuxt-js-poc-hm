interface Recipe {
  id: string;
  name: string;
  totalSteps: number;
  description: string;
  recipeImage: File | null | string;
  recipeCategory: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
}

interface Ingredient {
  id: string;
  imageFile: File | null | string;
  measurement: string;
  name: string;
  quantity: number;
  recipeId: string;
}

interface RecipeStep {
  stepId: string;
  step: number;
  stepDetails: string;
  recipeId: string;
  imageFile: File | null | string;
}
type RecipeStepForm = Pick<RecipeStep, "step"|"stepDetails"|"imageFile">
type RecipeStepProps = Omit<RecipeStep, "imageFile"> & {
  imageFile: string;
};
type IngredientProps = Omit<Ingredient, "imageFile"> & {
  imageFile: string;
};
type IngredientForm= Pick<Ingredient, "imageFile" | "measurement" |"name" | "quantity">;

type RecipePageProps = Omit<Recipe, "recipeImage" | "ingredients" | "steps"> & {
  recipeImage: string;
  ingredients: IngredientProps[];
  steps: RecipeStepProps[];
};
interface RecipeCard {
  name: string;
  recipeImage: File | null | string;
  description: string;
  recipeCategory: string;
}

type RecipeForm =Omit<Recipe,"id"|"ingredients"|"steps"> & {ingredients:IngredientForm[],steps:RecipeStepForm[]}

type RecipeFormProps= Omit<RecipeForm,"imageFile"> & { recipeImage: string };
export type { Recipe, Ingredient, RecipeStep, RecipePageProps, RecipeCard,IngredientForm ,RecipeStepForm,RecipeForm,RecipeFormProps};
