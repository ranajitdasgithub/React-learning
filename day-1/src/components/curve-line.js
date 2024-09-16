export function testCurveLinePosOffset(parentEl, attributes) {
    const start = new THREE.Vector3(0, 0, 0);
    const end = new THREE.Vector3(3, 0, 0);

    const pointOffset = 0.5 || 0.001;
    const defaultPoints = 100;
    const lineColor = 'yellow'

    function calculateFirstPoint(start, end, offset) {
        const halfX = (end.x - start.x) / 2;
        let pointOffset = offset > halfX ? halfX : offset;
        return new THREE.Vector3(start.x + Math.abs(pointOffset), start.y + pointOffset, start.z);
    }
    function calculateSecondPoint(start, end, offset) {
        const halfX = (end.x - start.x) / 2;
        let pointOffset = offset > halfX ? halfX : offset;
        return new THREE.Vector3(end.x - Math.abs(pointOffset), end.y - pointOffset, end.z);
    }
    const firstControlPoint = calculateFirstPoint(start, end, pointOffset);
    const secondControlPoint = calculateSecondPoint(start, end, pointOffset);

    const curve = new THREE.CatmullRomCurve3([start, firstControlPoint, secondControlPoint, end]);
    // const curve = new THREE.CubicBezierCurve3(start, firstControlPoint, secondControlPoint, end);
    const points = curve.getPoints(defaultPoints);

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: lineColor });

    let line = new THREE.Line(geometry, material);
    const lineEntity = document.createElement("a-entity");
    lineEntity.setObject3D("mesh", line);
    parentEl.appendChild(lineEntity);
}