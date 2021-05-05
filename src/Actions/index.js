export const setGols = (name, gols) => ({
  type: 'SET_GOLS',
  name,
  gols,
})

export const setFirstFinalist = (name) => ({
  type: 'SET_FIRST_FINALIST',
  name,
})

export const setSecondFinalist = (name) => ({
  type: 'SET_SECOND_FINALIST',
  name,
})

export const SetFinalistsGols = (id, gols) => ({
  type: 'SET_FINALIST_GOLS',
  id,
  gols,
})