<template>
    <h1>Skills</h1>
    <div class="columns">
      <div class="column" v-for="attributeGroup in attributeGroups"
                          v-bind:key="attributeGroup.name">
        <Sr3Box :title=attributeGroup.name>
          <Sr3Box v-for="(skillGroup, index) in attributeGroup.skillGroups"
                  v-bind:key="index">
            <ul>
              <li v-for="skill in skillGroup.skills" v-bind:key="skill.name">{{ skill.name }}</li>
            </ul>
          </Sr3Box>
        </Sr3Box>
      </div>
    </div>
</template>

<script lang="ts">
import Sr3Box from '@/components/Sr3Box.vue';
import container from '@/container';
import SkillService from '@/services/skill-service';
import { defineComponent, onMounted, ref } from 'vue';
import TYPES from '@/services/types';
import { AttributeGroup } from '@/store/models/skills';

export default defineComponent({
  components: {
    Sr3Box,
  },
  setup() {
    const characterService = container.get<SkillService>(TYPES.SkillService);
    const skills = ref([] as Array<AttributeGroup>);
    const getSkills = async () => {
      skills.value = await characterService.findAll();
    };

    onMounted(getSkills);

    return {
      attributeGroups: skills,
    };
  },
});
</script>
