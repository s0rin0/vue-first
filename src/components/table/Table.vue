<template>
  <P-Card style="width: 25rem; margin-bottom: 2em">
    <template #title> Dynamic Table Demo </template>
    <template #content>
      <P-DataTable
        :value="userMemberships"
        class="editable-cells-table"
      >
        <P-Column field="userName" header="User Name">
          <template #body="slotProps">
            <span>{{ slotProps.data.userName }}</span>
          </template>
        </P-Column>

        <P-Column v-for="team of teams" :header="team.name" :key="team.id">
          <template #body="slotProps">
            <P-Checkbox @change="onChangeMembership"
              :id="'show--' + team.id + '--' + slotProps.data.userId"
              v-model="slotProps.data.memberships[team.id]"
              :binary="true"
              autofocus
            />
          </template>

          
        </P-Column>
      </P-DataTable>
    </template>
  </P-Card>
</template>

<script src="./Table.js"></script>

<style >
</style>
