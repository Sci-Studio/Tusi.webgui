import { useRef, useEffect } from 'react';
import styles from './CadDisplay.module.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export default function CadDisplay() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;
            
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        renderer.render(scene, camera);

        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
        const torus = new THREE.Mesh(geometry, material);

        scene.add(torus);

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);
        const ambientLight = new THREE.AmbientLight(0xffffff);

        scene.add(pointLight, ambientLight);

        const gridHelper = new THREE.GridHelper(200, 50);
        const lightHelper = new THREE.PointLightHelper(pointLight);
        scene.add(lightHelper, gridHelper);
    
        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.x += 0.005;
            torus.rotation.x += 0.01;

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

    })


   

    return (
        <div>
            <canvas ref={canvasRef} id='bg' className={styles.background}></canvas>
        </div>
    )
}