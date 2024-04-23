<template>
  <div>update recipe</div>

  <!-- <pre> {{ recipe }}</pre> -->
  <RecipeForm :formValues="(recipe as RecipeFormProps)" />
</template>

<script lang="ts" setup>
import type {  RecipeFormProps } from '~/types/Recipe';

  const recipeId = useRoute().params.recipeId as string;

  const { getRecipeById } = useRecipeStore();
  const recipe = await getRecipeById(recipeId);
  console.log(recipe);
</script>

<style></style>
