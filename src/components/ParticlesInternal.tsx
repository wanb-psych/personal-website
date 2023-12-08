import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { options } from 'appearance';
import { Engine } from '@tsparticles/engine';

export const ParticlesInternal = () => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      // engine.addConfig(options);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return init ? (
      <Particles
        id="tsparticles"
        options={options}
      />
  ) : (
    <></>
  );
};
