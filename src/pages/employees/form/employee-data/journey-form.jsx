import { useCallback } from "react";
import {
    Col,
    Row,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
    Stack,
    FormCheck,
} from "react-bootstrap";

/**
 * @param {{onChange: Function, value: Journey}} props
 */
export default function JourneyForm({ onChange, value: journey }) {
    const handleChange = useCallback((propName, $event) => {
        let newValue = $event.target.value;
        if (propName == "workDays") {
            const workDaysCopy = [...journey.workDays];
            if ($event.target.checked) {
                workDaysCopy.push($event.target.value);
            } else {
                const index = findDay($event.target.value);
                if (index > -1) {
                    workDaysCopy.splice(index, 1);
                }
            }
            newValue = workDaysCopy;
        }
        onChange("journey", { ...journey, [propName]: newValue });
    });

    const findDay = useCallback(
        (day) => {
            return journey.workDays.indexOf(day);
        },
        [journey.workDays]
    );

    const isDayChecked = useCallback(
        (day) => {
            return findDay(day) != -1;
        },
        [journey.workDays, findDay]
    );

    return (
        <Row>
            <FormGroup as={Col} sm="3" lg="2">
                <FormLabel htmlFor="startTime">Horário Entrada</FormLabel>
                <FormControl
                    id="startTime"
                    name="startTime"
                    type="time"
                    required
                />
            </FormGroup>
            <FormGroup as={Col} sm="3" lg="2">
                <FormLabel htmlFor="departureTime">Horário Saída</FormLabel>
                <FormControl
                    id="departureTime"
                    name="departureTime"
                    type="time"
                    required
                />
                <label className="invalid-feedback"></label>
            </FormGroup>
            <FormGroup as={Col} sm="12" lg="auto">
                <FormLabel>Dias de trabalho</FormLabel>
                <Stack
                    direction="horizontal"
                    className="flex-wrap"
                    gap={{sm: 1}}
                >
                    <FormCheck
                        className="px-1"
                        inline="true"
                        label="Domingo"
                        value="sun"
                        id="day-sunday"
                        name="workday[0]"
                        checked={isDayChecked("sun")}
                        onChange={(e) => handleChange("workDays", e)}
                    />
                    <FormCheck
                        className="px-1"
                        label="Segunda-Feira"
                        inline="true"
                        value="mon"
                        id="day-monday"
                        name="workday[1]"
                        checked={isDayChecked("mon")}
                        onChange={(e) => handleChange("workDays", e)}
                    />
                    <FormCheck
                        className="px-1"
                        label="Terça-Feira"
                        inline="true"
                        value="tue"
                        id="day-tueday"
                        name="workday[2]"
                        checked={isDayChecked("tue")}
                        onChange={(e) => handleChange("workDays", e)}
                    />

                    <FormCheck
                        className="px-1"
                        label="Quarta-Feira"
                        inline="true"
                        value="wed"
                        id="day-wednesday"
                        name="workday[3]"
                        checked={isDayChecked("wed")}
                        onChange={(e) => handleChange("workDays", e)}
                    />

                    <FormCheck
                        className="px-1"
                        label="Quinta-Feira"
                        inline="true"
                        value="thu"
                        id="day-thursday"
                        name="workday[4]"
                        checked={isDayChecked("thu")}
                        onChange={(e) => handleChange("workDays", e)}
                    />

                    <FormCheck
                        className="px-1"
                        label="Sexta-Feira"
                        inline="true"
                        value="fri"
                        id="day-friday"
                        name="workday[5]"
                        checked={isDayChecked("fri")}
                        onChange={(e) => handleChange("workDays", e)}
                    />
                    <FormCheck
                        className="px-1"
                        label="Sábado"
                        inline="true"
                        value="sat"
                        id="day-saturday"
                        name="workday[6]"
                        checked={isDayChecked("sat")}
                        onChange={(e) => handleChange("workDays", e)}
                    />
                </Stack>
            </FormGroup>
        </Row>
    );
}
