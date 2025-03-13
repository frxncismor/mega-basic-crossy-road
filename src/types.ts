import * as THREE from 'three';

export type RowType = 'forest' | 'car' | 'truck';

export type Row = Forest | Car | Truck;

export type MoveDirection = "forward" | "backward" | "left" | "right";

interface Vehicle {
	initialTileIndex: number;
	color: THREE.ColorRepresentation;
	ref?: THREE.Object3D;
}

interface Tree {
  tileIndex: number;
  height: number
}

type Forest = {
	type: 'forest';
	trees: Tree[];
};

type Car = {
	type: 'car';
	direction: boolean;
	speed: number;
	vehicles: Vehicle[];
};

type Truck = {
	type: 'truck';
	direction: boolean;
	speed: number;
	vehicles: Vehicle[];
};
