<script>
  import Svelvet from 'svelvet';
  const initialNodes = [
    {
      id: 1,
      position: { x: 350, y: 50 },
      data: { label: 'Input Node' },
      width: 175,
      height: 40,
      bgColor: 'white'
    },
    {
      id: 2,
      position: { x: 350, y: 150 },
      data: { label: 'Default Node' },
      width: 175,
      height: 40,
      bgColor: 'white'
    },
    {
      id: 3,
      position: { x: 200, y: 275 },
      data: { label: 'Output Node #1' },
      width: 175,
      height: 40,
      bgColor: 'white'
    },
    {
      id: 4,
      position: { x: 500, y: 275 },
      data: { label: 'Output Node #2' },
      width: 175,
      height: 40,
      bgColor: 'white'
    },
    {
      id: 5,
      position: { x: 350, y: 350 },
      data: { label: 'Output Node #3' },
      width: 175,
      height: 40,
      bgColor: 'white'
    }
  ];
  const initialEdges = [
    {
      id: 'e1-2',
      source: 1,
      target: 2,
      type: 'straight',
      label: 'label',
      arrow: true
    },
    { id: 'e2-3', source: 2, target: 3, label: 'another label' },
    { id: 'e2-4', source: 2, target: 4, label: 'animated edge', animate: true },
    { id: 'e2-5', source: 2, target: 5, arrow: true }
  ];
</script>

<Svelvet nodes={initialNodes} edges={initialEdges} background />
