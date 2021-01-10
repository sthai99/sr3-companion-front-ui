<template>
  <div class="character-sheet">
    <div class="section">
      <div class="columns is-mobile">
        <div class="column">
          <Sr3Box title="Name">
            {{ name }}
          </Sr3Box>
        </div>
        <div class="column">
          <Sr3Box title="Race">
            {{ race }}
          </Sr3Box>
        </div>
        <div class="column">
          <Sr3Box title="Sex">
            {{ sex }}
          </Sr3Box>
        </div>
        <div class="column">
          <Sr3Box title="Age">
            {{ age }}
          </Sr3Box>
        </div>
      </div>
      <Sr3Box title="Description">
        {{ description }}
      </Sr3Box>
    </div>
    <div class="section">
      <div class="columns">
        <div class="column">
          <Sr3Box title="Attributes">
            <div class="columns is-mobile">
              <div class="column is-narrow">
                <div>Body</div>
                <div class="has-text-centered">
                  {{ attributes.body.natural }}
                  {{ attributes.body.augmented ? "(" + attributes.body.augmented + ")" : "" }}
                </div>
              </div>
              <div class="column is-narrow">
                <div>Strength</div>
                <div class="has-text-centered">
                  {{ attributes.strength.natural }}
                  {{ attributes.strength.augmented ?
                   "(" + attributes.strength.augmented + ")" : "" }}
                </div>
              </div>
              <div class="column is-narrow">
                <div>Quickness</div>
                <div class="has-text-centered">
                  {{ attributes.quickness.natural }}
                  {{ attributes.quickness.augmented ?
                   "(" + attributes.quickness.augmented + ")" : "" }}
                </div>
              </div>
              <div class="column is-narrow">
                <div>Charisma</div>
                <div class="has-text-centered">
                  {{ attributes.charisma.natural }}
                  {{ attributes.charisma.augmented ?
                   "(" + attributes.charisma.augmented + ")" : "" }}
                </div>
              </div>
              <div class="column is-narrow">
                <div>Intelligence</div>
                <div class="has-text-centered">
                  {{ attributes.intelligence.natural }}
                  {{ attributes.intelligence.augmented ?
                   "(" + attributes.intelligence.augmented + ")" : "" }}
                </div>
              </div>
              <div class="column is-narrow">
                <div>Willpower</div>
                <div class="has-text-centered">
                  {{ attributes.willpower.natural }}
                  {{ attributes.willpower.augmented ?
                   "(" + attributes.willpower.augmented + ")" : "" }}
                </div>
              </div>
              <div class="column is-narrow">
                <div>Reaction</div>
                <div class="has-text-centered">
                  {{ attributes.reaction.natural }}
                  {{ attributes.reaction.augmented ?
                   "(" + attributes.reaction.augmented + ")" : "" }}
                </div>
              </div>
            </div>
          </Sr3Box>
        </div>
        <div class="column">
          <Sr3Box title="Dice Pools">
            <div class="columns is-mobile">
              <Sr3Box title="Combat" class="column">
                8
              </Sr3Box>
              <Sr3Box title="Spell" class="column">
                7
              </Sr3Box>
            </div>
          </Sr3Box>
        </div>
        <div class="column">
          <Sr3Box title="Condition Monitor">
            <div class="columns is-mobile is-gapless">
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
            </div>
            <div class="columns is-mobile is-gapless">
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
              <div class="column is-narrow"><div class="box"/></div>
            </div>
          </Sr3Box>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="columns is-mobile">
        <div class="column">
          <Sr3Box title="Skills">
            <Sr3Box title="Active">
            </Sr3Box>
            <Sr3Box title="Knowledge">
            </Sr3Box>
            <Sr3Box title="Language">
            </Sr3Box>
          </Sr3Box>
        </div>
        <div class="column">
          <Sr3Box title="Powers"/>
        </div>
        <div class="column">
          <Sr3Box title="Spells"/>
        </div>
      </div>
    </div>
    <div class="section"></div>
  </div>
</template>

<script lang="ts">
import Stat from '@/store/models/stat';
import Attributes from '@/store/models/attributes';
import AttributesBuilder from '@/store/models/attributes-builder';
import { defineComponent } from 'vue';
import Sr3Box from './Sr3Box.vue';

export default defineComponent({
  components: {
    Sr3Box,
  },
  setup() {
    return {
      name: 'Mink',
      sex: 'Male',
      age: '24',
      race: 'Human',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit ac est nec laoreet. Suspendisse ut odio velit. Vivamus sem ex, tempus a libero convallis, pulvinar efficitur justo. Aliquam erat volutpat. Nunc commodo rutrum elit, ac cursus quam luctus sed. Nam mollis mauris ac scelerisque vestibulum. Phasellus viverra laoreet sapien, a placerat nibh blandit sit amet. Nam pulvinar malesuada elit vel fringilla. Donec fringilla sapien sit amet mi mattis, eget tempus neque euismod. Nam tempor facilisis est vel vulputate. Nam finibus elementum purus eget cursus. Sed non laoreet enim, at tempor massa. Duis consequat finibus mi, in mollis justo elementum in. Donec vulputate diam vitae vestibulum condimentum. Vestibulum tristique, enim quis accumsan mattis, est enim tempus lorem, in fermentum diam lacus quis nulla. Donec pretium elit laoreet velit bibendum hendrerit at vitae dolor.',
      attributes: new AttributesBuilder()
        .withBody(new Stat(3, 4))
        .withStrength(new Stat(3))
        .withQuickness(new Stat(4))
        .withCharisma(new Stat(6))
        .withIntelligence(new Stat(4))
        .withWillpower(new Stat(6))
        .withReaction(new Stat(5, 7))
        .build() as Attributes,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
